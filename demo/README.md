# Microfrontend Runtime Integration Demos

This directory contains comprehensive demonstrations of five different microfrontend runtime integration approaches, each implementing an e-commerce application with a shell/host app and 5 microfrontends.

## 📁 Demo Structure

Each demo implements the same e-commerce application with:
- **Shell/Host App**: Main container application
- **5 Microfrontends**:
  - Home MFE
  - Product Catalog MFE
  - Cart MFE
  - Checkout MFE
  - Orders MFE

## 🏃 Running the Demos

Each demo folder contains its own README with specific setup and run instructions.
Just search for `Running the Demo` in each README.

## 🚀 Integration Approaches

### 1. [Module Federation](./module-federation/)
Webpack 5's native module federation for sharing code and dependencies at runtime.
- **Communication**: Custom events via event bus
- **Key Features**: Shared dependencies, dynamic imports, version management

### 2. [Single-SPA](./single-spa/)
Framework-agnostic approach for combining multiple JavaScript frameworks.
- **Communication**: Custom events and shared state
- **Key Features**: Framework interoperability, lifecycle management

### 3. [iframe Integration](./iframe-integration/)
Traditional iframe-based isolation with postMessage communication.
- **Communication**: postMessage API
- **Key Features**: Complete isolation, security boundaries

### 4. [Web Components](./web-components/)
Native browser technology for creating reusable custom elements.
- **Communication**: Custom events and attributes
- **Key Features**: Framework agnostic, native browser support

### 5. [Import Maps + SystemJS](./importmaps-systemjs/)
ESM-based dynamic module loading with import maps.
- **Communication**: Custom events via shared event bus
- **Key Features**: Native ESM support, dynamic loading

## 🔄 Cross-MFE Communication Patterns

Each demo showcases different communication patterns:
- **Event-based**: Custom events, event bus patterns
- **Message-based**: postMessage for iframe isolation

## 📊 Comparison Matrix

| Feature | Module Federation | Single-SPA | iframe | Web Components | Import Maps |
|---------|------------------|------------|---------|----------------|-------------|
| Isolation Level | Medium | Medium | High | Medium | Low |
| Bundle Size | Optimized | Medium | Separate | Medium | Optimized |
| Framework Agnostic | No | Yes | Yes | Yes | Yes |
| Shared Dependencies | Yes | Yes | No | Partial | Yes |
| Communication | Events | Events/State | postMessage | Events | Events |
| SEO Friendly | Yes | Yes | Limited | Yes | Yes |
| Development Complexity | Medium | High | Low | Medium | Low |
