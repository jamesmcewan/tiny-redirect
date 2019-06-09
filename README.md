# Tiny Redirect

Small domain redirect function for use with now.sh

## Usage

Add the url to redirect to as a now secret:

```bash
now secrets add tiny_redirect_url 'https://YOUR_SITE'
```

Alias your old domain to the subsequent now deployment

```bash
now alias OLD_DOMAIN TINY_REDIRECT_DEPLOYMENT
```

And done.
