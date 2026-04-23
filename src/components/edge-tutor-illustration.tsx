/**
 * System diagram: learner → on-device edge tutor.
 * Markup + CSS (no canvas) for crisp lines and print-friendly output.
 */
export function EdgeTutorIllustration() {
  return (
    <div className="edge-tutor" aria-hidden="true">
      <div className="edge-tutor__frame">
        <div className="edge-tutor__kid">
          <p className="edge-tutor__kidLabel">The kid</p>
          <p className="edge-tutor__kidLine">speaks, asks, learns</p>
        </div>

        <div className="edge-tutor__bridge">
          <div className="edge-tutor__link" aria-hidden="true">
            <span className="edge-tutor__linkLine" />
            <svg
              className="edge-tutor__linkArrow"
              viewBox="0 0 12 8"
              width="12"
              height="8"
              focusable="false"
            >
              <path
                d="M1 1 L6 6 L11 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="edge-tutor__panel">
          <div className="edge-tutor__panelHead">
            <p className="edge-tutor__panelName">Edge tutor</p>
            <p className="edge-tutor__panelBadge">On-device · offline</p>
          </div>

          <ul className="edge-tutor__specs">
            <li>
              <span className="edge-tutor__specKey">Model</span>
              <span className="edge-tutor__specVal">&lt; 3B params (SLM)</span>
            </li>
            <li>
              <span className="edge-tutor__specKey">Hardware</span>
              <span className="edge-tutor__specVal">&lt; $50 device</span>
            </li>
          </ul>

          <p className="edge-tutor__herLang">Her language</p>

          <ul className="edge-tutor__asserts">
            <li>no Wi-Fi · no server</li>
            <li>no permission needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
