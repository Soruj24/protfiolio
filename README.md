# Portfolio Website - Modern Developer Portfolio

A sophisticated, AI-powered portfolio website built with Next.js, featuring modern design, interactive elements, and comprehensive project showcasing capabilities.

## 🚀 Features

### ✨ Core Features
- **Responsive Design**: Fully responsive design that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions
- **Project Showcase**: Detailed project presentations with filtering and categorization
- **Blog Integration**: Built-in blog system for technical articles and insights
- **Contact System**: Interactive contact form with AI-powered suggestions

### 🎨 Design Features
- **Glass Morphism**: Modern glass-morphism design elements
- **Gradient Backgrounds**: Dynamic gradient backgrounds and animations
- **Smooth Animations**: Framer Motion powered animations throughout
- **Dark/Light Theme**: Theme toggle functionality (ready for implementation)
- **3D Elements**: Interactive 3D-like UI components

### 🤖 AI Integration
- **AI Project Suggestions**: Intelligent project type recommendations
- **Smart Contact Form**: Context-aware contact form assistance
- **Portfolio Assistant**: AI-powered guidance for portfolio optimization
- **Tech Stack Analysis**: Automated technology recommendations

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Advanced animations
- **Shadcn/UI**: Beautiful component library
- **Lucide React**: Modern icon library

### Backend & APIs
- **Next.js API Routes**: Serverless API endpoints
- **MongoDB**: Database for projects and blog posts
- **NextAuth.js**: Authentication system
- **Cloudinary**: Image and media management

### Development Tools
- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing
- **TypeScript**: Full type safety

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- MongoDB Atlas account or local MongoDB
- Cloudinary account (for image uploads)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Soruj24/protfiolio.git
   cd protfiolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your credentials:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically with every push

### Other Platforms
- **Netlify**: Similar to Vercel setup
- **Railway**: Great for full-stack deployment
- **AWS/GCP**: For enterprise deployments

## 📁 Project Structure

```
my-app/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── about/          # About page
│   ├── blog/           # Blog pages
│   ├── contact/        # Contact page
│   ├── projects/       # Projects pages
│   └── admin/          # Admin dashboard
├── components/         # React components
│   ├── Contact/        # Contact-related components
│   ├── Home/           # Homepage components
│   ├── Projects/       # Project components
│   ├── admin/          # Admin components
│   ├── blog/           # Blog components
│   └── ui/             # UI components (Shadcn)
├── data/               # Static data
├── lib/                # Utility libraries
├── models/             # Database models
├── services/           # API services
├── types/              # TypeScript type definitions
└── utils/              # Helper utilities
```

## 🎯 Customization

### Personal Information
Update your personal details in:
- `data/portfolioData.ts` - Portfolio information
- `data/contactData.ts` - Contact information
- `data/blog.ts` - Blog posts and articles

### Styling
- Modify colors in `tailwind.config.js`
- Update global styles in `app/globals.css`
- Customize components in `components/ui/`

### Content Management
- Add projects via admin dashboard
- Write blog posts through the CMS
- Update about information in data files

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS approach
- **Shadcn/UI** for beautiful components
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact through the portfolio website
- Email: [Your Email]

---

⭐ **Star this repo** if you found it helpful!

Built with ❤️ using Next.js and modern web technologies.
