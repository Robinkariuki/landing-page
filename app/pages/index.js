import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="why-siscom" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Siscom?</h2>
          <p className="text-gray-600">
            At Siscom, we are committed to delivering top-tier IT services that empower businesses to achieve their goals.
          </p>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            We offer a wide range of services including software development, IT consulting, and infrastructure management.
          </p>
        </div>
      </section>

      <section id="about-us" className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600">
            Siscom is a leading IT solutions provider with a mission to drive innovation and efficiency.
          </p>
        </div>
      </section>

      <section id="careers" className="min-h-screen flex items-center justify-center bg-white">
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Careers</h2>
          <p className="text-gray-600">
            Join our team of professionals and work on exciting projects that make a difference.
          </p>
        </div>
      </section>
    </div>
  );
}
