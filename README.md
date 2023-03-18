# John Virtual Card

## Welcome to John Virtual Card project

This is the app I built for John:

## Home page

![image](https://user-images.githubusercontent.com/92505216/226087893-446e0ba8-d880-476d-8d4c-24a42b360cf4.png)

At home page John can type his details into the inputs (all are required), including name, Linkedin and Github urls.

Then by clicking "Generate Image" a modal window will be rendered, on which he will find his QR code.

## QR Code

![image](https://user-images.githubusercontent.com/92505216/226087680-afd0a72f-e725-468a-9a39-1feaa58a1c77.png)

And that is it. Now he can just show that QR Code to whoever wants to know his details. This QR code will redirect everyone to another page of the website, on which all John's informations will be rendered in the screen.

## Details page

![image](https://user-images.githubusercontent.com/92505216/226087854-3d6bb76c-e2ba-4699-a4fd-ce9ebd1883d1.png)

## Technologies used

- TypeScript
- React
- Ant Design
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
