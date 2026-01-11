# React Email Template Bootstrap Example

A professional, unopinionated starting point for building and managing React-based emails across your organization.

You can test the API immediately by visiting the **Live Playground** at [emailtemplate.kristofajosh.dev](https://emailtemplate.kristofajosh.dev).

Alternatively, use `curl` to test the API directly:
```bash
curl -X POST https://emailtemplate.kristofajosh.dev/api/render/text \
  -H "Content-Type: application/json" \
  -d '{
  "emailModule": "general",
  "template": "christmas",
  "variables": {
    "email": "user@example.com",
    "name": "John Doe"
  }
}'
```

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.