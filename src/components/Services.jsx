import { Shield, BarChart3, Workflow, LineChart } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Financial Strategy',
    desc: 'Data-driven planning to align capital, pricing, and growth with durable unit economics.',
  },
  {
    icon: Shield,
    title: 'Risk & Compliance',
    desc: 'Robust frameworks across KYC/AML, credit risk, and controls that scale with your org.',
  },
  {
    icon: Workflow,
    title: 'Operational Excellence',
    desc: 'From workflows to tooling, optimize processes for speed, quality, and margin.',
  },
  {
    icon: LineChart,
    title: 'Revenue Acceleration',
    desc: 'Pricing, packaging, and GTM motions that improve conversion and LTV/CAC.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">End-to-end advisory that blends strategic clarity with operator depth.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
