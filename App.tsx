import React, { useState, useEffect } from 'react';
import {
  Menu, X, Heart, Users, BookOpen, HandHeart,
  Eye, Target, CheckCircle2, GraduationCap, Utensils,
  Stethoscope, Home, Handshake, LifeBuoy, CreditCard,
  Smartphone, Phone, Mail, MapPin, Instagram, Facebook,
  Twitter, Youtube, Send, Check
} from 'lucide-react';

import penyerahanBeasiswa from './images/penyerahan-beasiswa.jpg';
import distribusiSembako from './images/distribusi-sembako.jpg';
import baktiSosial from './images/bakti-sosial.jpg';
import renovasiRumah from './images/renovasi-rumah.jpg';
import bantuanBencana from './images/bantuan-bencana.jpg';
import pemberdayaanUmkm from './images/pemberdayaan-umkm.jpg';
import qris from './images/qris.jpg';
import logo from './images/logo.png';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'Program', href: '#program' },
    { name: 'Pembayaran Kartu Kredit', href: '#transfer-bank' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Donasi', href: '#donation' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img src={logo} alt="Logo Yayasan" className="w-full h-full object-contain" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-slate-800 leading-tight">Yayasan Pendidikan Islam Al Hikmah</h1>
            <p className="text-xs text-primary-600 font-medium">Sukamanah Tanara</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-primary-600 font-medium text-sm transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 font-medium hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold">
            <Heart className="w-4 h-4 fill-current" />
            <span>Berbagi Kebaikan</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Bersama <br />
            Membangun <br />
            <span className="text-primary-600">Harapan</span>
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
            Yayasan Pendidikan Islam Al Hikmah Sukamanah hadir untuk memberikan pendidikan, bantuan sosial, dan dukungan kemanusiaan bagi mereka yang membutuhkan.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#donation" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-semibold transition-colors shadow-lg shadow-primary-200">
              Donasi Sekarang
            </a>
            <a href="#about" className="bg-white border border-slate-300 hover:border-primary-500 hover:text-primary-600 text-slate-700 px-8 py-3 rounded-md font-semibold transition-colors">
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-primary-200 to-primary-100 rounded-[2rem] shadow-xl flex items-center justify-center overflow-hidden group">
            <Heart className="w-32 h-32 text-primary-600 animate-pulse" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-primary-800 font-bold text-xl">Berbagi Kasih Sayang</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { icon: <Users className="w-10 h-10 text-primary-600" />, count: "500+", label: "Penerima Manfaat" },
    { icon: <BookOpen className="w-10 h-10 text-primary-600" />, count: "15+", label: "Program Aktif" },
    { icon: <HandHeart className="w-10 h-10 text-primary-600" />, count: "1000+", label: "Donatur" },
  ];

  return (
    <section className="py-12 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.count}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-8 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tentang Kami</h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 text-lg">
          Yayasan Al Hikmah Sukamanah adalah lembaga sosial kemanusiaan yang berkomitmen untuk meningkatkan kualitas hidup masyarakat melalui berbagai program bantuan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary-600 rounded-lg text-white">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Visi</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              Menjadi lembaga sosial terpercaya yang memberikan dampak positif berkelanjutan dalam meningkatkan kesejahteraan masyarakat, khususnya di bidang pendidikan, sosial, dan kemanusiaan.
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary-600 rounded-lg text-white">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Misi</h3>
            </div>
            <ul className="space-y-3">
              {[
                "Memberikan akses pendidikan berkualitas bagi anak-anak kurang mampu",
                "Menyalurkan bantuan sosial kepada masyarakat yang membutuhkan",
                "Memberdayakan ekonomi masyarakat melalui program produktif",
                "Meningkatkan kesadaran berbagi dan solidaritas sosial"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700">
                  <span className="text-primary-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-primary-100/50 p-8 rounded-2xl border border-primary-100 h-full">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Profil Yayasan</h3>
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Yayasan Al Hikmah Sukamanah didirikan dengan tujuan mulia untuk membantu sesama dan memberikan harapan bagi mereka yang membutuhkan. Berawal dari kepedulian sekelompok individu yang ingin berbagi kebaikan, yayasan ini terus berkembang dan menjangkau lebih banyak penerima manfaat.
            </p>
            <p>
              Dengan prinsip transparansi, amanah, dan profesional, kami mengelola setiap donasi dengan penuh tanggung jawab untuk memastikan bantuan sampai kepada yang berhak menerimanya.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary-600 mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900">Terpercaya</h4>
                <p className="text-sm text-slate-500">Amanah & Transparan</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-primary-600 mb-2">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-slate-900">Legal</h4>
                <p className="text-sm text-slate-500">Terdaftar Resmi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTABanner = () => {
  return (
    <section className="bg-primary-600 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mari Bersama Mewujudkan Kebaikan</h2>
        <p className="text-primary-50 max-w-2xl mx-auto text-lg">
          Setiap kontribusi Anda, sekecil apapun, sangat berarti untuk mengubah kehidupan mereka yang membutuhkan.
        </p>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Beasiswa Pendidikan",
      desc: "Program bantuan beasiswa untuk anak-anak kurang mampu agar dapat melanjutkan pendidikan dari SD hingga perguruan tinggi.",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-50"
    },
    {
      title: "Bantuan Pangan",
      desc: "Penyaluran paket sembako dan makanan bergizi untuk keluarga prasejahtera dan dhuafa yang membutuhkan.",
      icon: <Utensils className="w-8 h-8 text-white" />,
      color: "bg-orange-500",
      lightColor: "bg-orange-50"
    },
    {
      title: "Kesehatan Gratis",
      desc: "Pemeriksaan kesehatan gratis, pengobatan, dan bantuan biaya rumah sakit bagi masyarakat tidak mampu.",
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      color: "bg-red-500",
      lightColor: "bg-red-50"
    },
    {
      title: "Renovasi Rumah",
      desc: "Program renovasi dan perbaikan rumah tidak layak huni untuk memberikan tempat tinggal yang aman dan nyaman.",
      icon: <Home className="w-8 h-8 text-white" />,
      color: "bg-green-500",
      lightColor: "bg-green-50"
    },
    {
      title: "Bantuan Sosial",
      desc: "Bantuan modal usaha mikro, pelatihan keterampilan, dan pemberdayaan ekonomi untuk kemandirian masyarakat.",
      icon: <Handshake className="w-8 h-8 text-white" />,
      color: "bg-purple-500",
      lightColor: "bg-purple-50"
    },
    {
      title: "Tanggap Bencana",
      desc: "Respon cepat dalam situasi darurat dan bencana alam dengan penyaluran bantuan logistik dan kebutuhan mendesak.",
      icon: <LifeBuoy className="w-8 h-8 text-white" />,
      color: "bg-pink-500",
      lightColor: "bg-pink-50"
    }
  ];

  return (
    <section id="program" className="py-20 px-4 md:px-8 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Program & Kegiatan</h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 text-lg">
          Berbagai program yang kami jalankan untuk memberikan dampak positif dan meningkatkan kualitas hidup masyarakat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((prog, i) => (
          <div key={i} className={`${prog.lightColor} p-8 rounded-2xl border-b-4 border-transparent hover:border-current transition-all group shadow-sm`} style={{ borderColor: 'transparent' }}>
            <div className={`${prog.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md`}>
              {prog.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">{prog.title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              {prog.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <h3 className="text-2xl font-bold text-slate-900">Program Berkelanjutan</h3>
          <p className="text-slate-600">
            Semua program dirancang dengan pendekatan berkelanjutan untuk memberikan dampak jangka panjang. Kami tidak hanya memberikan bantuan sesaat, tetapi juga memberdayakan masyarakat agar dapat mandiri dan meningkatkan kualitas hidup mereka secara permanen.
          </p>
          <ul className="space-y-4 pt-2">
            {[
              "Transparan dalam pengelolaan dana",
              "Laporan berkala kepada donatur",
              "Monitoring dan evaluasi program"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 w-full bg-primary-100 rounded-2xl p-8 flex flex-col items-center justify-center text-center py-16">
          <h4 className="text-5xl font-bold text-primary-600 mb-2">100%</h4>
          <h5 className="text-xl font-semibold text-slate-900 mb-4">Amanah</h5>
          <p className="text-slate-600 text-sm max-w-xs">Donasi Anda disalurkan sepenuhnya untuk program-program kebaikan</p>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    {
      url: penyerahanBeasiswa,
      title: "Penyerahan Beasiswa",
      desc: "Kegiatan penyerahan beasiswa pendidikan untuk siswa berprestasi"
    },
    {
      url: distribusiSembako,
      title: "Distribusi Sembako",
      desc: "Pembagian paket sembako kepada keluarga prasejahtera"
    },
    {
      url: baktiSosial,
      title: "Bakti Sosial",
      desc: "Kegiatan bakti sosial dan pengobatan gratis untuk masyarakat"
    },
    {
      url: renovasiRumah,
      title: "Renovasi Rumah",
      desc: "Program renovasi rumah tidak layak huni"
    },
    {
      url: bantuanBencana,
      title: "Bantuan Bencana",
      desc: "Tanggap darurat dan distribusi bantuan korban bencana"
    },
    {
      url: pemberdayaanUmkm,
      title: "Pemberdayaan UMKM",
      desc: "Pelatihan dan bantuan modal usaha mikro"
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Galeri Kegiatan</h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 text-lg">
          Dokumentasi berbagai kegiatan dan program yang telah kami laksanakan untuk membantu masyarakat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <a key={idx} href="#transfer-bank" className="group relative overflow-hidden rounded-xl h-64 shadow-lg cursor-pointer block">
            <img src={img.url} alt={img.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-lg mb-1">{img.title}</h4>
              <p className="text-gray-200 text-xs md:text-sm opacity-90">{img.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

const SocialFollow = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 pb-20">
      <div className="bg-primary-50 rounded-3xl p-8 md:p-16 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Ikuti Perkembangan Kegiatan Kami</h3>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Dapatkan update terbaru tentang program dan kegiatan yayasan melalui media sosial kami.
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://www.facebook.com/share/16qgAnu48V/" target="_blank" rel="noopener noreferrer" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary-700 transition-colors">
            <Facebook className="w-5 h-5" />
            Ikuti Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

const Donation = () => {
  const [copiedBank, setCopiedBank] = useState<string | null>(null);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedBank(text);
      setTimeout(() => setCopiedBank(null), 2000);
    } catch (err) {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setCopiedBank(text);
        setTimeout(() => setCopiedBank(null), 2000);
      } catch (e) {
        console.error('Copy failed', e);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <section id="donation" className="py-20 px-4 md:px-8 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Informasi Donasi</h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 text-lg">
          Salurkan donasi Anda melalui berbagai metode pembayaran yang tersedia. Setiap kontribusi Anda sangat berarti untuk keberlangsungan program kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div id="transfer-bank" className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 scroll-mt-28">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 p-3 rounded-lg text-white">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Transfer Bank</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex justify-between items-start mb-2">
                <span className="text-sm text-slate-500 font-medium">Bank</span>
                <CreditCard className="w-5 h-5 text-primary-600" />
              </div>
              <p className="text-lg font-bold text-slate-900">Bank BRI</p>

              <div className="my-4 border-t border-slate-200"></div>

              <span className="text-sm text-slate-500 font-medium">Nomor Rekening 1</span>
              <div className="flex justify-between items-center mt-1 bg-white p-3 rounded border border-slate-200">
                <span className="font-mono text-lg font-bold text-slate-900 tracking-wider">008401003560568</span>
                <button
                  onClick={() => handleCopy('008401003560568')}
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                  title="Copy"
                >
                  {copiedBank === '008401003560568' ? <Check className="w-4 h-4" /> : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                  )}
                </button>
              </div>

              <div className="mt-4"></div>

              <span className="text-sm text-slate-500 font-medium">Nomor Rekening 2</span>
              <div className="flex justify-between items-center mt-1 bg-white p-3 rounded border border-slate-200">
                <span className="font-mono text-lg font-bold text-slate-900 tracking-wider">008401003564562</span>
                <button
                  onClick={() => handleCopy('008401003564562')}
                  className="text-primary-600 hover:text-primary-800 transition-colors"
                  title="Copy"
                >
                  {copiedBank === '008401003564562' ? <Check className="w-4 h-4" /> : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                  )}
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs text-slate-500 uppercase tracking-wide">Atas Nama</span>
                <p className="font-semibold text-slate-800">YPI AL HIKMAH SUKAMANAH</p>
              </div>
            </div>


          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 p-3 rounded-lg text-white">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">QRIS (E-Wallet)</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center">
              <img src={qris} alt="QRIS Yayasan Al Hikmah" className="w-full h-auto object-contain rounded-lg" />
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-600 p-3 rounded-lg text-white">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Paypal</h3>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col items-center justify-center text-center">
              <p className="text-slate-600 mb-2 text-sm">Klik link di bawah untuk donasi via Paypal:</p>
              <a href="https://www.paypal.me/ypialhikmahtanara" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-bold text-lg hover:underline break-all">
                https://www.paypal.me/ypialhikmahtanara
              </a>
              <div className="flex gap-3 mt-4 justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="American Express" className="h-6 object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-primary-700 text-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Mengapa Berdonasi?</h3>
            <ul className="space-y-4">
              {[
                "Membantu pendidikan anak-anak kurang mampu",
                "Meringankan beban keluarga prasejahtera",
                "Memberikan harapan hidup yang lebih baik",
                "Berbagi kebahagiaan dengan sesama"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-primary-300 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Transparansi Dana</h3>
            <p className="text-slate-600 text-sm mb-6">
              Kami berkomitmen untuk mengelola setiap donasi dengan penuh amanah dan transparansi. Laporan penggunaan dana dapat diakses secara berkala.
            </p>
            <div className="bg-primary-50 p-4 rounded-lg">
              <h4 className="font-bold text-primary-700 text-xl">100%</h4>
              <p className="text-xs text-primary-800">Donasi Tersalurkan</p>
            </div>
          </div>

          <div className="bg-primary-100 p-8 rounded-2xl border border-primary-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Konfirmasi Donasi</h3>
            <p className="text-slate-600 text-sm mb-4">
              Setelah transfer, mohon konfirmasi melalui WhatsApp untuk verifikasi.
            </p>
            <button
              onClick={() => window.open('https://wa.me/6281532626732?text=Saya%20mau%20konfirmasi%20Donasi', '_blank')}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-md font-medium transition-colors"
            >
              Hubungi WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const BannerQuote = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-20">
      <div className="bg-white rounded-xl shadow-md p-10 md:p-14 text-center border-t-4 border-primary-200">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Setiap Rupiah Berharga</h3>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Tidak ada donasi yang terlalu kecil. Setiap kontribusi Anda, sekecil apapun, akan kami salurkan dengan penuh tanggung jawab untuk membantu mereka yang membutuhkan.
        </p>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 container mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Hubungi Kami</h2>
        <div className="h-1 w-20 bg-primary-600 mx-auto rounded-full mb-6"></div>
        <p className="text-slate-600 text-lg">
          Ada pertanyaan atau ingin berpartisipasi dalam program kami? Jangan ragu untuk menghubungi kami.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-primary-50 p-8 md:p-10 rounded-2xl border border-primary-100">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
          <form className="space-y-6" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData.entries());
            const text = `Nama: ${data.name}%0AEmail: ${data.email}%0ANo HP: ${data.phone}%0ASubjek: ${data.subject}%0APesan: ${data.message}`;
            window.open(`https://wa.me/6281532626732?text=${text}`, '_blank');
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nama Lengkap *</label>
                <input name="name" type="text" placeholder="Masukkan nama Anda" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                <input name="email" type="email" placeholder="email@example.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nomor Telepon</label>
                <input name="phone" type="tel" placeholder="+62 812-3456-7890" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subjek *</label>
                <select name="subject" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white">
                  <option>Pilih subjek</option>
                  <option>Informasi Donasi</option>
                  <option>Menjadi Relawan</option>
                  <option>Lainnya</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Pesan *</label>
              <textarea name="message" rows={5} placeholder="Tulis pesan Anda di sini..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none" required></textarea>
            </div>

            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2">
              <Send className="w-5 h-5" />
              Kirim Pesan
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Alamat Kantor</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Jl. Simpang Tiga Sukamanah Kp. Tersaba RT/RW. 002/001 Ds. Sukamanah Kec. Tanara Kab. Serang-Banten 42194
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Telepon</h4>
            <p className="text-sm text-slate-600">
              +62 851-7989-1351
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">Email</h4>
            <p className="text-sm text-slate-600">
              yalhikmahtanara@gmail.com
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white mb-4">
              <Smartphone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 mb-1">WhatsApp</h4>
            <p className="text-sm text-slate-600">
              +62 815-3262-6732
            </p>
          </div>

          <div className="bg-primary-600 p-6 rounded-xl text-white">
            <h4 className="font-bold mb-3 text-lg">Jam Operasional</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Senin - Jumat</span>
                <span>08:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabtu</span>
                <span>08:00 - 12:00</span>
              </div>
              <div className="flex justify-between font-semibold text-primary-200">
                <span>Minggu</span>
                <span>Tutup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationMap = () => {
  return (
    <section className="w-full h-[450px] bg-slate-50 border-t border-slate-200">
      <iframe
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?q=Jl.%20Simpang%20Tiga%20sukamanah%20Kp.%20Tersaba%20RT%2FRW.%20002%2F001%20Ds.%20Sukamanah%20Kec.%20Tanara%20Kab.%20Serang-Banten%2042194&t=&z=15&ie=UTF8&iwloc=&output=embed"
        title="Lokasi Yayasan Al Hikmah"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full p-1">
                <img src={logo} alt="Logo Yayasan" className="w-full h-full object-contain" />
              </div>
              <div>
                <h5 className="font-bold text-white leading-tight">Yayasan Pendidikan Islam Al Hikmah</h5>
                <p className="text-[10px] text-slate-400">Sukamanah</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Lembaga sosial kemanusiaan yang berkomitmen untuk meningkatkan kualitas hidup masyarakat melalui berbagai program bantuan pendidikan, sosial, dan kemanusiaan.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-primary-500" />
                <span>Jl. Simpang Tiga sukamanah Kp. Tersaba RT/RW. 002/001 Ds. Sukamanah Kec. Tanara Kab. Serang-Banten 42194</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <span>+62 81952578921  +62 85179891351</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <span>yalhikmahtanara@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Tentang</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="hover:text-primary-500 transition-colors">Profil Yayasan</a></li>
              <li><a href="#about" className="hover:text-primary-500 transition-colors">Visi & Misi</a></li>
              <li><a href="#program" className="hover:text-primary-500 transition-colors">Program Kami</a></li>
              <li><a href="#gallery" className="hover:text-primary-500 transition-colors">Galeri</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Donasi</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#donation" className="hover:text-primary-500 transition-colors">Cara Donasi</a></li>
              <li><a href="#donation" className="hover:text-primary-500 transition-colors">Rekening Bank</a></li>
              <li><a href="#donation" className="hover:text-primary-500 transition-colors">QRIS</a></li>
              <li><a href="#donation" className="hover:text-primary-500 transition-colors">Konfirmasi Donasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hubungi</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Kontak Kami</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Lokasi</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Jam Operasional</a></li>
              <li><a href="#contact" className="hover:text-primary-500 transition-colors">Kirim Pesan</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 Yayasan pendidikan Al Hikmah Sukamanah Tanara. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-sm text-slate-500 mr-2">Ikuti Kami:</span>
            <a href="https://www.facebook.com/share/16qgAnu48V/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded hover:bg-primary-600 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <CTABanner />
      <Programs />
      <Gallery />
      <SocialFollow />
      <Donation />
      <BannerQuote />
      <Contact />
      <LocationMap />
      <Footer />
    </div>
  );
};

export default App;