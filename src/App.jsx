import Header from './components/Header'; 
import Hero from './components/Hero'; 
import Features from './components/Features'; 
import Gallery from './components/Gallery'; 
import VariantList from './components/VariantList'; 
import BookingFeature from './components/BookingFeature'; 
import CheckList from './components/CheckList'; 
import Footer from './components/Footer'; 

function App() {

  return (

    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
      <Header />

      <main className="flex-1">
        <Hero />
        <Features />
        <Gallery />
        <BookingFeature />
        <CheckList />
        <VariantList />
      </main>

      <Footer />
    </div>

  );
    
}

export default App
