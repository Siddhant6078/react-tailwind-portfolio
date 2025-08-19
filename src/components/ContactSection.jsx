import { useToast } from '@/hooks/use-toast'
import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter
} from 'lucide-react'
import { cn } from '../lib/utils'
import { useState } from 'react'

const ContactSection = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      toast({
        title: 'Message Sent',
        description: 'Thank you for your message. I will get back to you soon!'
      })
      setIsSubmitting(false)
    }, 1500)
  }
  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Get In <span className='text-primary'>Touch</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          If you have any questions or inquiries, feel free to reach out!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-center'>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a
                    href='mailto:hello@example.com'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a
                    href='tel:+919970401880'
                    className='text-muted-foreground hover:text-primary transition-colors'
                  >
                    +91 9970401880
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <p className='text-muted-foreground'>
                    R1 F-702, Life Republic Kolte Patil Township Marunji Pune
                    411057
                  </p>
                </div>
              </div>
            </div>

            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a
                  href='https://www.linkedin.com/in/chaudhari-siddhant/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Linkedin />
                </a>
                <a
                  href='https://www.instagram.com/siddhant_cool/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Instagram />
                </a>
                <a
                  href='https://x.com/Siddhant6078'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Twitter />
                </a>
              </div>
            </div>
          </div>
          <div
            className='bg-card p-8 rounded-lg shadow-xs'
            onSubmit={handleSubmit}
          >
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 gap-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium mb-2'
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    required
                    placeholder='Siddhant Chaudhari...'
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium mb-2'
                  >
                    Your Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    required
                    placeholder='john.doe@example.com'
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-2'
                  >
                    Your Message
                  </label>
                  <textarea
                    rows='4'
                    id='message'
                    required
                    name='message'
                    placeholder={`Hello, I'd like to talk about...`}
                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  />
                </div>
              </div>
              <button
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2'
                )}
                disabled={isSubmitting}
                type='submit'
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}{' '}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
