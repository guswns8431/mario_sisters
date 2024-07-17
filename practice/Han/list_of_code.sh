#!/bin/bash

# Change working directory to root
cd ~

# Install Istio repository
helm repo add istio https://istio-release.storage.googleapis.com/charts
helm repo update

# Install Istio
kubectl create namespace istio-system
helm install istio-base istio/base -n istio-system --set defaultRevision=default

# Install ingress gateway
kubectl create namespace istio-ingress
helm install istio-ingress istio/gateway -n istio-ingress

# Installation Complete

# Make a directory for bookshelf
mkdir -p /istio/bookinfo
cd /istio/bookinfo

# Install manifest for bookinfo
curl https://raw.githubusercontent.com/istio/istio/release-1.22/samples/bookinfo/platform/kube/bookinfo.yaml > manifest.yaml

# Create resources using manifest
kubectl create namespace book-demo
kubectl label namespace book-demo istio-injection=enabled
kubectl apply -f manifest.yaml -n book-demo

# Install manifest for bookinfo gateway api
kubectl get crd gateways.gateway.networking.k8s.io &> /dev/null || \
  { kubectl kustomize "github.com/kubernetes-sigs/gateway-api/config/crd?ref=v1.1.0" | kubectl apply -f -; }
curl https://raw.githubusercontent.com/istio/istio/release-1.22/samples/bookinfo/gateway-api/bookinfo-gateway.yaml > gateway.yaml

# Get the gateway url
export INGRESS_HOST=$(kubectl get gtw bookinfo-gateway -o jsonpath='{.status.addresses[0].value}')
export INGRESS_PORT=$(kubectl get gtw bookinfo-gateway -o jsonpath='{.spec.listeners[?(@.name=="http")].port}')
echo $INGRESS_HOST:$INGRESS_PORT