# Strapi + Next.js Full-Stack Project

A modern full-stack web application built with **Strapi** (headless CMS) and **Next.js** (React framework), featuring a clean architecture and modern development practices.

## 🎥 Tutorial Reference

This project is based on the comprehensive tutorial by [YouTube Tutorial](https://www.youtube.com/watch?v=Q-cPtlYG1cY&t=959s). Follow along to learn how to build a full-stack application with Strapi and Next.js.

## 🚀 Project Overview

This is a full-stack web application that demonstrates the integration between:

- **Strapi**: A powerful headless CMS for managing content and APIs
- **Next.js 15**: The latest version of the React framework with App Router
- **TypeScript**: For type-safe development
- **Tailwind CSS**: For modern, utility-first styling

## ✨ Features

- **Modern Tech Stack**: Built with the latest versions of Next.js, React, and TypeScript
- **Headless CMS**: Strapi backend for content management
- **Type Safety**: Full TypeScript support throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Development**: Hot reloading and Turbopack for optimal development experience
- **SEO Optimized**: Next.js built-in SEO features

## 🛠️ Tech Stack

### Frontend

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React version
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

### Backend

- **Strapi** - Headless CMS (configured separately)
- **REST API** - Content delivery via Strapi's built-in API

## 📁 Project Structure

```
frontend/
├── src/
│   └── app/
│       ├── layout.tsx      # Root layout component
│       ├── page.tsx        # Home page component
│       └── globals.css     # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── eslint.config.mjs      # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn** package manager
- **Strapi backend** running (see setup instructions below)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Strapi backend URL:

   ```env
   NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌐 Strapi Backend Setup

### 1. Create Strapi Project

```bash
npx create-strapi-app@latest backend --quickstart
```

### 2. Configure Content Types

- Create your content types in Strapi admin panel
- Set up API permissions for public access
- Configure media upload settings

### 3. Start Strapi

```bash
cd backend
npm run develop
```

Access Strapi admin at [http://localhost:1337/admin](http://localhost:1337/admin)

## 📱 API Integration

The frontend connects to Strapi's REST API endpoints:

```typescript
// Example API call
const response = await fetch(
  `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`
);
const data = await response.json();
```

## 🎨 Styling

This project uses **Tailwind CSS 4** for styling:

- **Utility-first approach** for rapid development
- **Responsive design** with mobile-first methodology
- **Dark mode support** built-in
- **Custom components** can be created using Tailwind utilities

## 🔒 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Strapi Backend URL
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337

# Optional: Strapi API Token (for authenticated requests)
STRAPI_API_TOKEN=your_api_token_here
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

- **Netlify**: Similar to Vercel setup
- **Railway**: Great for full-stack deployments
- **DigitalOcean App Platform**: Scalable hosting solution

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📚 Learning Resources

- **[YouTube Tutorial](https://www.youtube.com/watch?v=Q-cPtlYG1cY&t=959s)** - Complete project walkthrough
- **[Next.js Documentation](https://nextjs.org/docs)** - Official Next.js docs
- **[Strapi Documentation](https://docs.strapi.io/)** - Official Strapi docs
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)** - Utility-first CSS framework

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Ensure ports 3000 (Next.js) and 1337 (Strapi) are available
2. **CORS errors**: Configure CORS settings in Strapi admin panel
3. **Build errors**: Clear `.next` folder and reinstall dependencies
4. **TypeScript errors**: Run `npm run lint` to identify issues

### Getting Help

- Check the [Issues](../../issues) section
- Review the tutorial video for specific steps
- Consult the official documentation links above

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Strapi Team** for the amazing headless CMS
- **Vercel** for Next.js and hosting platform
- **Tailwind Labs** for the utility-first CSS framework
- **YouTube Tutorial Creator** for the comprehensive walkthrough

---

**Happy Coding! 🚀**

If you found this tutorial helpful, don't forget to like and subscribe to the [YouTube channel](https://www.youtube.com/watch?v=Q-cPtlYG1cY&t=959s)!
