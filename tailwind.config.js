/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Lora"', '"Lora Fallback"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Jakarta Fallback"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          main: '#2B2433',
          muted: '#5B5166',
          light: '#7A6F87',
        },
        surface: {
          canvas: '#FAF7FD',
          card: '#FFFFFF',
          subtle: '#F4EFFC',
          dark: '#26123D',
        },
        cta: {
          start: '#7c3aed',
          end: '#6d28d9',
          whatsapp: '#25D366',
          whatsappHover: '#20ba59',
        }
      },
      boxShadow: {
        'card': '0 8px 24px rgba(43, 36, 51, 0.05)',
        'floating-bar': '0 -4px 20px rgba(43, 36, 51, 0.08)',
      }
    }
  },
  plugins: [],
}
