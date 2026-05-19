export default function Footer() {
  return (
    <footer className="bg-[#32333c] py-8">
      <div className="max-w-6xl mx-auto px-8 text-center">
        <p className="font-['Alexandria:Bold',sans-serif] text-[#29e7d1] text-[16px] tracking-[-0.32px]">
          © {new Date().getFullYear()} Julian Badillo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
