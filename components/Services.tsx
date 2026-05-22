import { ServiceIcon } from "@/lib/icons";
import { services } from "@/lib/site-config";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-28 px-6 bg-noir border-t border-or/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Nos services</span>
          <h2 className="section-title section-title-dark">Une expertise complète</h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="btn-outline-gold">
            Demander un devis
          </a>
        </div>
      </div>
    </section>
  );
}

type Service = (typeof services)[number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card group">
      <div className="flex justify-center mb-6">
        <ServiceIcon name={service.icon} className="w-10 h-10" />
      </div>

      <h3 className="font-sans text-sm font-semibold text-or tracking-[0.08em] uppercase mb-4 group-hover:text-or-clair transition-colors duration-500">
        {service.title}
      </h3>

      <p className="body-text group-hover:text-blanc transition-colors duration-500">
        {service.description}
      </p>
    </article>
  );
}
