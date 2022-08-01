import React from "react";
import { useEffect } from "react";
import PlanStep from "./ui/PlanStep";

const Plan: React.FC = () => {
  const onStepsAppearInView = (steps: IntersectionObserverEntry[]) => {
    steps.forEach((step: IntersectionObserverEntry) => {
      if (step.isIntersecting) {
        if (step.target.classList.contains("plan__step-1")) {
          step.target.classList.add("plan__step1-appear");
        } else if (step.target.classList.contains("plan__step-2")) {
          step.target.classList.add("plan__step2-appear");
        } else {
          step.target.classList.add("plan__step3-appear");
        }
      }
    });
  };

  const onPlaneAppearInView = (planes: IntersectionObserverEntry[]) => {
    planes.forEach((plane: IntersectionObserverEntry) => {
      if (plane.isIntersecting) {
        plane.target.classList.add("plan__plane-appear");
      }
    });
  };

  const createAnimationOnAppear = () => {
    const planeObserver = new IntersectionObserver(onPlaneAppearInView, {
      threshold: [0.5],
    });
    const stepsObserver = new IntersectionObserver(onStepsAppearInView, {
      threshold: [0.5],
    });
    const steps = document.querySelectorAll(".plan__step");
    const planes = document.querySelectorAll(".plan__steps-plane");

    for (const step of steps) {
      stepsObserver.observe(step);
    }
    for (const plane of planes) {
      planeObserver.observe(plane);
    }
  };

  useEffect(() => {
    createAnimationOnAppear();
  }, []);

  const planSteps = [
    {
      step: 1,
      text: "Зарегистрируйтесь на конкурс ",
      link: "#!",
    },
    {
      step: 2,
      text: "Выполните все условия конкурса",
      link: "#!",
    },
    {
      step: 3,
      text: `Загрузите рисунок Здесь или в Личном кабинете`,
      link: "#!",
    },
  ];

  return (
    <article className="plan">
      <img
        className="plan__steps-plane"
        src={require("../images/flying-plane.png")}
        alt=""
      />
      <h2 className="plan__title">
        Пошаговый <span className="wavy-underline">план</span>
      </h2>
      <div className="plan__steps-wrapper">
        <svg
          className="plan__line"
          width="1304"
          height="448"
          viewBox="0 0 1304 448"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.0964648 1.76175C0.228019 0.665047 1.22372 -0.117365 2.32043 0.0141894C5.10886 0.348672 7.89678 0.712304 10.6844 1.10455L10.1271 5.06553C7.36605 4.67703 4.60512 4.31692 1.84403 3.98572C0.747322 3.85416 -0.0350892 2.85846 0.0964648 1.76175ZM43.0892 11.0158C37.6078 9.81433 32.1309 8.71637 26.6564 7.72595L27.3685 3.78985C32.8927 4.78926 38.4177 5.8969 43.9456 7.10861L43.0892 11.0158ZM75.5305 19.2861C70.1397 17.7258 64.7569 16.2572 59.3803 14.8841L60.3701 11.0084C65.7891 12.3924 71.2126 13.8721 76.6427 15.4439L75.5305 19.2861ZM107.453 29.5318C102.143 27.6668 96.8434 25.8824 91.5535 24.1823L92.7774 20.3742C98.1026 22.0856 103.436 23.8814 108.779 25.7578L107.453 29.5318ZM138.828 41.4057C133.617 39.2983 128.42 37.2606 123.235 35.2959L124.653 31.5555C129.866 33.531 135.091 35.5795 140.328 37.6975L138.828 41.4057ZM169.681 54.5975C164.54 52.2867 159.414 50.0361 154.303 47.849L155.877 44.1716C161.011 46.3686 166.159 48.6288 171.321 50.9491L169.681 54.5975ZM200.086 68.8479C195.031 66.3874 189.994 63.9781 184.973 61.6229L186.672 58.0015C191.711 60.3653 196.766 62.7829 201.837 65.2513L200.086 68.8479ZM230.117 83.9339C225.102 81.3417 220.106 78.7934 215.129 76.2914L216.925 72.7175C221.917 75.2266 226.926 77.7818 231.954 80.3804L230.117 83.9339ZM259.796 99.6373C254.844 96.9618 249.914 94.3228 245.003 91.7228L246.874 88.1877C251.796 90.7933 256.737 93.4377 261.697 96.1182L259.796 99.6373ZM289.282 115.843C284.355 113.095 279.451 110.377 274.567 107.691L276.495 104.186C281.386 106.876 286.298 109.598 291.23 112.35L289.282 115.843ZM318.553 132.365C313.65 129.57 308.77 126.8 303.912 124.057L305.879 120.574C310.742 123.32 315.627 126.093 320.534 128.89L318.553 132.365ZM347.7 149.1C342.827 146.286 337.977 143.492 333.15 140.72L335.142 137.251C339.972 140.025 344.825 142.821 349.7 145.636L347.7 149.1ZM376.817 165.967C371.949 163.141 367.106 160.331 362.286 157.538L364.291 154.077C369.112 156.871 373.957 159.681 378.825 162.507L376.817 165.967ZM405.947 182.871C401.059 180.038 396.196 177.216 391.357 174.408L393.366 170.948C398.204 173.757 403.066 176.578 407.953 179.41L405.947 182.871ZM435.059 199.69C430.169 196.877 425.305 194.071 420.466 191.275L422.468 187.812C427.305 190.607 432.166 193.411 437.054 196.223L435.059 199.69ZM464.255 216.389C459.36 213.608 454.492 210.832 449.649 208.061L451.635 204.589C456.475 207.358 461.34 210.132 466.231 212.911L464.255 216.389ZM493.576 232.907C488.67 230.168 483.79 227.431 478.937 224.696L480.901 221.211C485.75 223.943 490.624 226.678 495.526 229.414L493.576 232.907ZM523.047 249.183C518.11 246.487 513.2 243.79 508.317 241.092L510.251 237.591C515.129 240.285 520.033 242.979 524.964 245.672L523.047 249.183ZM552.692 265.162C547.716 262.516 542.768 259.866 537.846 257.212L539.745 253.692C544.659 256.341 549.601 258.988 554.57 261.63L552.692 265.162ZM582.529 280.794C577.512 278.206 572.523 275.612 567.562 273.012L569.419 269.469C574.372 272.065 579.353 274.656 584.363 277.239L582.529 280.794ZM612.565 296.029C607.509 293.509 602.481 290.98 597.481 288.444L599.29 284.877C604.282 287.409 609.302 289.934 614.349 292.449L612.565 296.029ZM642.798 310.818C637.709 308.376 632.648 305.924 627.616 303.462L629.374 299.869C634.397 302.327 639.449 304.774 644.529 307.212L642.798 310.818ZM673.265 325.135C668.141 322.778 663.045 320.408 657.978 318.027L659.68 314.407C664.737 316.783 669.822 319.149 674.937 321.501L673.265 325.135ZM703.971 338.945C698.809 336.677 693.678 334.395 688.574 332.1L690.215 328.452C695.308 330.743 700.429 333.02 705.58 335.283L703.971 338.945ZM734.918 352.215C729.719 350.041 724.549 347.852 719.408 345.647L720.985 341.971C726.115 344.171 731.273 346.356 736.461 348.525L734.918 352.215ZM758.329 361.812C755.706 360.758 753.09 359.7 750.482 358.638L751.99 354.933C754.593 355.993 757.203 357.049 759.82 358.1C762.546 359.195 765.264 360.28 767.973 361.354L766.498 365.072C763.784 363.996 761.061 362.909 758.329 361.812ZM799.081 377.631C793.675 375.608 788.236 373.542 782.762 371.432L784.201 367.699C789.662 369.805 795.089 371.867 800.482 373.885L799.081 377.631ZM832.008 389.551C826.546 387.642 821.05 385.686 815.519 383.683L816.881 379.922C822.399 381.92 827.881 383.871 833.328 385.775L832.008 389.551ZM865.159 400.695C859.659 398.921 854.124 397.098 848.553 395.225L849.828 391.434C855.383 393.302 860.902 395.12 866.386 396.887L865.159 400.695ZM898.568 410.973C893.024 409.351 887.445 407.676 881.829 405.948L883.006 402.125C888.604 403.848 894.165 405.517 899.691 407.134L898.568 410.973ZM932.297 420.289C926.696 418.836 921.059 417.325 915.385 415.757L916.45 411.901C922.105 413.464 927.721 414.969 933.302 416.417L932.297 420.289ZM1303.8 421.877C1301 422.751 1298.21 423.603 1295.41 424.434L1294.27 420.599C1297.05 419.774 1299.83 418.928 1302.6 418.06L1303.8 421.877ZM966.328 428.511C960.681 427.25 954.998 425.929 949.278 424.546L950.218 420.658C955.916 422.036 961.576 423.352 967.199 424.607L966.328 428.511ZM1278.54 429.161C1272.88 430.652 1267.21 432.055 1261.52 433.369L1260.62 429.472C1266.27 428.166 1271.9 426.774 1277.51 425.293L1278.54 429.161ZM1000.63 435.492C994.94 434.449 989.212 433.34 983.446 432.166L984.245 428.246C989.985 429.415 995.687 430.519 1001.35 431.558L1000.63 435.492ZM1244.39 437.049C1238.66 438.186 1232.92 439.234 1227.15 440.194L1226.49 436.248C1232.22 435.295 1237.93 434.254 1243.61 433.126L1244.39 437.049ZM1035.19 441.084C1029.46 440.283 1023.69 439.412 1017.88 438.472L1018.52 434.523C1024.3 435.459 1030.04 436.326 1035.75 437.123L1035.19 441.084ZM1209.82 442.802C1204.05 443.58 1198.25 444.27 1192.42 444.874L1192.01 440.895C1197.79 440.296 1203.55 439.61 1209.29 438.838L1209.82 442.802ZM1069.97 445.128C1064.2 444.596 1058.4 443.99 1052.56 443.31L1053.02 439.337C1058.83 440.013 1064.6 440.616 1070.34 441.145L1069.97 445.128ZM1174.96 446.414C1169.16 446.838 1163.33 447.177 1157.47 447.431L1157.3 443.435C1163.12 443.183 1168.91 442.846 1174.67 442.425L1174.96 446.414ZM1104.91 447.463C1099.12 447.226 1093.29 446.911 1087.42 446.519L1087.69 442.528C1093.52 442.918 1099.31 443.231 1105.07 443.466L1104.91 447.463ZM1139.95 447.936C1134.14 448.02 1128.3 448.021 1122.42 447.941L1122.48 443.941C1128.32 444.021 1134.12 444.019 1139.89 443.936L1139.95 447.936Z"
            fill="#FF946E"
          />
        </svg>
        <div className="plan__steps">
          {planSteps.map((step) => {
            return (
              <PlanStep
                link={step.link}
                step={step.step}
                text={step.text}
                key={step.step}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

export default Plan;