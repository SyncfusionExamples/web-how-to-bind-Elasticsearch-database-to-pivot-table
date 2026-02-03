# 📊 Bind Elasticsearch Database to a Syncfusion Pivot Table

> Quick-start samples demonstrating how to retrieve data from an Elasticsearch cluster via a lightweight Web API and display it using Syncfusion EJ2 PivotView (Pivot Table) across TypeScript, JavaScript, Angular, React, Vue and plain Node/Express back-end samples.

---

## 📚 Table of Contents

- [🔍 Project Overview](#-project-overview)
- [🚀 Quick Start](#-quick-start)
- [✨ Key Features](#-key-features)
- [🛠️ Supported Platforms & Dependencies](#️-supported-platforms--dependencies)
- [🧭 Project Structure](#-project-structure)
- [🧩 Minimal Example (Elasticsearch API + PivotView)](#-minimal-example-elasticsearch-api--pivotview)
- [⚙️ Configuration & Environment](#️-configuration--environment)
- [🧪 Testing & CI](#-testing--ci)
- [🤝 Contributing](#-contributing)
- [📜 License & Support](#-license--support)

---

## 🔍 Project Overview

This repository demonstrates how to connect to an Elasticsearch index from a small Web API (Node/Express or similar) and surface query results to client applications using Syncfusion EJ2 PivotView controls. It includes multi-framework front-end samples for quick prototyping and evaluation.

Use cases:
- Log analytics and interactive BI dashboards
- Product/category multidimensional reporting
- Rapid prototyping of PivotView integrations against Elasticsearch indices

---

## 🚀 Quick Start

Prerequisites
- Node.js 16+ (or later)
- Running Elasticsearch cluster (local, Docker, or Elastic Cloud) and connection credentials (host, port, optional username/password or API key)
- Optional: npm/Yarn for front-end builds

Run the Web API (example Node/Express server)

```bash
cd server
npm install
npm start
# API runs on the configured port (see server configuration)
```

Run a front-end sample (choose one):

TypeScript
```bash
cd Typescript/pivot-table
npm install
npm start
```

Angular
```bash
cd Angular/pivot-table
npm install
npm start
```

React
```bash
cd React/pivot-table
npm install
npm start
```

Vue
```bash
cd VUE/pivot-table
npm install
npm run dev
```

First success: Open the front-end sample URL (e.g., http://localhost:3000 or http://localhost:4200) and confirm the PivotView loads rows from the running Web API.

---

## ✨ Key Features

- Elasticsearch client integration (official clients such as `@elastic/elasticsearch` or `Elasticsearch.Net`) in the Web API ✅
- Multi-framework client samples: TypeScript, JavaScript, Angular, React, Vue ✅
- Copy-paste-ready patterns for server → client binding to Syncfusion PivotView ✅
- Lightweight server examples suitable for local development and Dockerized deployments ✅

Why this helps:
- Connects Elasticsearch datasets to interactive pivot reporting quickly.
- Reusable patterns across modern front-end frameworks.

---

## 🛠️ Supported Platforms & Dependencies

- Languages: JavaScript/TypeScript (Node/Express server and clients)
- Server (example Node server package.json):
    - `@elastic/elasticsearch` — official Elasticsearch client for Node.js
    - `express` — minimal web server
    - `cors` — CORS handling for local front-end origins
- Client: `@syncfusion/ej2` umbrella or per-framework packages (e.g., `@syncfusion/ej2-react-pivotview` 32.x)
- System requirements: Node.js, running Elasticsearch instance, npm for front-end builds

---

## 🧭 Project Structure (high level)

- `server/` — Node/Express Web API that queries Elasticsearch and returns JSON
- `Typescript/`, `Javascript/`, `Angular/`, `React/`, `VUE/` — front-end samples using Syncfusion PivotView

Entry points:
- API route: `server/routes/elasticsearch.js` (or similar)
- Client mount: `Typescript/pivot-table/src/index.html` or framework equivalents

---

## 🧩 Minimal Example (Elasticsearch API + PivotView)

Server: basic Elasticsearch query (Node.js)

```js
const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: process.env.ELASTIC_URL || 'http://localhost:9200' });

async function getPivotData(req, res) {
    const result = await client.search({
        index: 'sales_sample',
        size: 1000,
        _body: {
            query: { match_all: {} },
            _source: ['country', 'product', 'amount']
        }
    });
    const rows = result.hits.hits.map(h => ({
        Country: h._source.country,
        Product: h._source.product,
        Amount: h._source.amount
    }));
    res.json(rows);
}
```

Client: bind PivotView (vanilla JS)

```js
fetch('/api/pivotdata')
    .then(r => r.json())
    .then(data => {
        var pivot = new ej.pivotview.PivotView({
            dataSourceSettings: { dataSource: data, rows:[{name:'Country'}], columns:[{name:'Product'}], values:[{name:'Amount'}] },
            showFieldList: true,
            height: 400
        });
        pivot.appendTo('#PivotTable');
    });
```

---

## ⚙️ Configuration & Environment

- Elasticsearch connection: store credentials securely (environment variables or secret manager). Example formats:

HTTP basic auth:
```text
ELASTIC_URL=http://localhost:9200
ELASTIC_USERNAME=<user>
ELASTIC_PASSWORD=<password>
```

Elastic Cloud:
```text
ELASTIC_CLOUD_ID=<cloud_id>
ELASTIC_API_KEY=<api_key>
```

- Configure server config (e.g., `server/.env`) to supply the connection settings to the API.
- CORS: enable for local front-end origins in the server configuration.

Troubleshooting:
- Verify index mappings and available fields for the queried index.
- Confirm network access to Elasticsearch (firewall/Docker network). Use client logs to debug queries and responses.

---

## 🧪 Testing & CI

- Add GitHub Actions to build the server and optionally run front-end builds per sample. Suggested jobs:
    - `npm ci` / `npm test` (server)
    - `npm ci` / `npm run build` for front-end samples
- Optionally run integration checks against a test Elasticsearch instance (Docker Compose or Elastic Cloud trial).

---

## 🤝 Contributing

Contributions welcome. Suggested workflow:
1. Fork and create a branch `feature/<desc>`
2. Run the API locally and test sample clients
3. Open a PR with description, screenshots, and testing steps

## 📜 License & Support

This is a **commercial product** subject to the Syncfusion End User License Agreement (EULA).

**Free Community License** is available for qualifying users/organizations:  
- Annual gross revenue < $1 million USD  
- 5 or fewer total developers  
- 10 or fewer total employees  

The community license allows free use in both internal and commercial applications under these conditions.  
No registration or approval is required — just comply with the terms.

**Paid Licenses** are required for:  
- Larger organizations  
- Teams exceeding the community license limits  
- Priority support, custom patches, or on-premise deployment options  

Purchase options and pricing: https://www.syncfusion.com/sales/products  
30-day free trial (full features, no credit card required): https://www.syncfusion.com/downloads/essential-js2  
Community License details & FAQ: https://www.syncfusion.com/products/communitylicense  
Full EULA: https://www.syncfusion.com/eula/es/

© 2026 Syncfusion, Inc. All Rights Reserved.