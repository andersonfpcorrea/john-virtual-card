# John Virtual Card

## Welcome to John Virtual Card project

This is the app I built for John:

## Home page

IMAGE HERE

At home page John can type his details into the inputs (all are required), including name, Linkedin and Github urls.

Then by clicking "Generate Image" a modal window will be rendered, on which he will find his QR code.

## QR Code

IMAGE 2

And that is it. Now he can just show that QR Code to whoever wants to know his details. This QR code will redirect everyone to another page of the website, on which all John's informations will be rendered in the screen.

## Details page

IMAGE 3

## Technologies used

- TypeScript
- React
- Vite (build)
- ESLint
- Vitest (unit tests)
- Testing Library
- Husky (pre-commit hooks for running tests and linting)
- Docker
- Deploy with Cloudflare [here](https://john-virtual-card.pages.dev)

## Instructions for running the app locally with Docker

### Download the project

```
git clone git@github.com:andersonfpcorrea/john-virtual-card.git
```

### Create a .env file

```
rename the file ".env.example" to ".env"
```

### Run Docker Compose

```
docker compose up --build
```

After hitting `docker compose up --build`, a `nginx` server will be running on [localhost:5173](http://localhost:5173), serving the app.

## Check the app live

If you prefer, you can check the app on [Cloudflare](https://john-virtual-card.pages.dev)
