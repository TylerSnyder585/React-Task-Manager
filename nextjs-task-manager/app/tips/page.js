export const metadata = {
  title: "Tips - Task Manager",
  description: "Get a small piece of advice or a tip for your day.",
};

// SSR: runs on every request
export default async function TipsPage() {
  let tip = null;
  let error = null;

  try {
    const res = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    tip = data?.slip?.advice ?? null;
  } catch (err) {
    error = "Sorry, we couldn't load a tip right now. Please try again later.";
  }

  return (
    <section>
      <h1>Tips</h1>
      <div className="tips-panel">
        <h2>Advice of the Day:</h2>  
        {error && <p>{error}</p>}
        {!error && tip && <p>{tip}</p>}
        {!error && !tip && <p>No tip available at the moment.</p>}
        <small>*Advice is simply a fun, randomly generated note*</small>
      </div>
    </section>
  );
}
