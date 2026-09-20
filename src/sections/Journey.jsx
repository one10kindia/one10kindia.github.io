import './Journey.css';

const STEPS = [
  { n: '01', title: 'Discover', copy: 'Find ONE10K through the Bengaluru running community and digital channels.' },
  { n: '02', title: 'Commit', copy: 'Register for the single 10K category — no category confusion, one decision.' },
  { n: '03', title: 'Prepare', copy: 'Train with training plans, group runs and race-week content.' },
  { n: '04', title: 'Run', copy: 'Race day on NICE Road — one straight, point-to-point course.' },
  { n: '05', title: 'Celebrate', copy: 'Cross the finish line together and collect your medal.' },
  { n: '06', title: 'Remember', copy: 'Relive it through photos, results and the ONE10K community.' },
];

export default function Journey() {
  return (
    <section className="journey">
      <div className="container">
        <div className="journey-head">
          <p className="eyebrow">The Runner Journey</p>
          <h2 className="journey-title">One concentrated experience, start to finish</h2>
        </div>

        <div className="journey-track">
          {STEPS.map((s, i) => (
            <div className="journey-step" key={s.n}>
              <div className="journey-step-top">
                <span className="journey-step-n">{s.n}</span>
                {i < STEPS.length - 1 && <span className="journey-step-line" />}
              </div>
              <h3 className="journey-step-title">{s.title}</h3>
              <p className="journey-step-copy">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
