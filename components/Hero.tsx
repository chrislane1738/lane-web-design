import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-background to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
          We Build Websites That
          <br />
          <span className="text-primary">Grow Your Business</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-secondary max-w-2xl mx-auto animate-fade-in-up animation-delay-100">
          Custom web design and development that turns visitors into customers.
          Modern, fast, and built to perform.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-200">
          <Button href="#contact" variant="primary">
            Start Your Project
          </Button>
          <Button href="#portfolio" variant="outline">
            View Our Work
          </Button>
        </div>
      </div>
    </section>
  );
}
