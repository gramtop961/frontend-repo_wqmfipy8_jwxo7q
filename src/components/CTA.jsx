export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 sm:p-12">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-2xl" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Ready to transform your financial strategy?</h3>
            <p className="mt-3 text-gray-600 max-w-2xl">Book a 30-minute discovery call. We’ll map opportunities, outline quick wins, and craft the right engagement model for your stage.</p>
            <form className="mt-8 grid sm:grid-cols-3 gap-3">
              <input type="email" required placeholder="Work email" className="col-span-2 w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" />
              <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800">
                Request Consultation
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">We’ll never share your information. By submitting, you agree to our privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
