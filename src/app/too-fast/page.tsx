function page() {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bebas-neue font-bold text-5xl text-light-100">
        Whooaaa, Slow Down There Speedy!
      </h1>
      <p className="mt-3 max-w-xl text-light-100 text-center">
        You have made too many requests in a short period. Please try again
        later.
      </p>
    </main>
  );
}

export default page;
