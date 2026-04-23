import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Linkedin, Mail, Facebook } from 'lucide-react';

const team = [
  {
    initials: 'KS',
    name: 'Dr. Kamal Sharma',
    role: 'Founder & Owner',
    desc: 'Visionary leader driving innovation in AI and smart technology solutions.',
    gradient: 'from-[#1a2a6c] to-[#2d6bcf]',
    socials: ['linkedin', 'email'],
  },
  {
    initials: 'AP',
    name: 'Ajay Pratap Devra',
    role: 'Senior Developer',
    desc: 'Leads core system development and advanced AI integration.',
    gradient: 'from-[#c0006e] to-[#a0005b]',
    socials: ['linkedin', 'email'],
  },
  {
    initials: 'AD',
    name: 'Aditya',
    role: 'Junior Developer',
    desc: 'Works on AI models, system testing, and implementation.',
    gradient: 'from-[#d43a2a] to-[#c0501a]',
    socials: ['linkedin', 'email', 'facebook'],
  },
  {
    initials: 'RG',
    name: 'Raghav',
    role: 'Full Stack Developer',
    desc: 'Handles frontend, backend, and system architecture.',
    gradient: 'from-[#5c1aaa] to-[#7b2db5]',
    socials: ['linkedin', 'email'],
  },
  {
    initials: 'KS',
    name: 'Karan Singh',
    role: 'Tech Team Member',
    desc: 'Supports hardware integration and technical operations.',
    gradient: 'from-[#b83020] to-[#d04020]',
    socials: ['linkedin', 'email'],
  },
];

const socialIcons: Record<string, React.ReactNode> = {
  linkedin: <Linkedin className="w-3.5 h-3.5" />,
  email: <Mail className="w-3.5 h-3.5" />,
  facebook: <Facebook className="w-3.5 h-3.5" />,
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-navy pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <div className="section-label">OUR PEOPLE</div>
            <h1 className="section-title">
              Awesome <span>Team</span>
            </h1>
            <div className="w-12 h-0.5 bg-red-500 mx-auto mt-3 mb-4" />
            <p className="text-slate-400 max-w-xl mx-auto">
              Passionate engineers and innovators building the future of AI-powered
              education and safety in India.
            </p>
          </div>

          {/* Team Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="w-44 bg-white rounded-xl overflow-hidden shadow-xl group"
              >
                {/* Avatar */}
                <div className={`relative h-44 bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                  <span className="font-heading font-bold text-4xl text-white tracking-widest">
                    {member.initials}
                  </span>
                  {/* Social overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {member.socials.map((s) => (
                      <button
                        key={s}
                        className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-gray-700 hover:bg-white transition-colors"
                      >
                        {socialIcons[s]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="p-3.5 text-center bg-white">
                  <h3 className="font-heading font-bold text-gray-900 text-sm leading-tight mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[10px] font-semibold text-red-500 uppercase tracking-wider mb-2">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}