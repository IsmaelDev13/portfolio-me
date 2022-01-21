import * as React from "react";
import { SVGProps } from "react";

const SvgUnderline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g opacity={0.8} fill="#046d6d" fillRule="evenodd" stroke="#000">
      <path d="M307.01 292.397c28.55-14.872 43.148-15.054 53.793-11.471-16.008 4.913-33.94 12.616-53.611 24.01l-.017.086c21.194-11.04 40.246-18.324 56.98-22.809 5.495 2.37 10.102 5.535 15.532 7.63 45.422 26.938 72.175 12.96 69.004 5.182 3.565-12.464-28.581-31.834-86.5-14.515-10.775-4.52-25.655-5.259-55.182 11.844v.043zm58.239-10.471c53.828-14.12 83.389.848 83.086 12.437a6.118 6.118 0 0 0-.08-.117c.026.051.04.104.064.157a6.717 6.717 0 0 1-.814 3.011 7.577 7.577 0 0 0 1.103-2.089c1.073 7.485-24.221 18.351-68.92-5.523-4.95-2.002-9.286-5.255-14.44-7.876zm82.256 15.488c-.055.075-.106.149-.165.223v.085c.061-.101.11-.205.165-.308zm.75-3.168c-.029-.054-.05-.108-.081-.16v.04c.03.039.052.08.08.12z" />
      <path d="M307.638 310.245c-29.774 16.567-44.996 16.774-56.096 12.79 16.694-5.477 35.396-14.058 55.912-26.75l.02-.096c-22.106 12.299-41.975 20.414-59.427 25.414-5.73-2.638-10.531-6.159-16.193-8.488-47.355-29.974-75.257-14.402-71.953-5.745-3.722 13.878 29.793 35.43 90.194 16.128 11.234 5.029 26.75 5.844 57.543-13.206v-.047zm-60.731 11.678c-56.135 15.739-86.955-.913-86.635-13.816.027.043.055.088.084.131-.028-.057-.042-.117-.067-.175a7.875 7.875 0 0 1 .85-3.353 8.619 8.619 0 0 0-1.15 2.326c-1.117-8.332 25.262-20.439 71.865 6.123 5.16 2.228 9.68 5.847 15.053 8.764zm-85.768-17.213c.057-.083.11-.166.17-.248l.001-.095c-.063.113-.114.229-.171.343zm-.783 3.528c.03.06.052.12.084.179v-.045c-.031-.044-.054-.09-.084-.134z" />
      <path d="M299.6 308.964c50.559 17.454 76.519 17.885 95.503 13.947-28.398-5.867-60.178-14.955-94.997-28.295l-.029-.097c37.533 12.956 71.31 21.582 101.006 26.97 9.808-2.63 18.046-6.18 27.734-8.495 81.174-30.136 128.552-13.731 122.794-4.88 6.161 14.319-51.29 35.996-154.046 15.294-19.23 5.009-45.704 5.627-97.966-14.395v-.049zm103.424 12.87c95.526 16.978 148.315.3 147.945-12.967-.046.044-.093.09-.146.133.053-.059.074-.12.12-.179-.045-1.191-.496-2.35-1.404-3.459.863.77 1.508 1.575 1.929 2.408 2.02-8.549-42.807-21.37-122.651 5.27-8.83 2.217-16.589 5.872-25.793 8.794zm146.515-16.472c-.098-.086-.186-.172-.29-.257l.001-.098c.109.118.191.237.29.355zm1.284 3.638c-.047.06-.088.122-.146.182v-.045c.058-.045.1-.092.146-.137z" />
      <path d="M300.88 294.94c-50.56-17.455-76.52-17.886-95.504-13.947 28.397 5.866 60.177 14.954 94.997 28.294l.026.098c-37.53-12.957-71.308-21.583-101.004-26.97-9.807 2.63-18.046 6.18-27.734 8.494-81.172 30.136-128.549 13.731-122.796 4.88-6.16-14.319 51.295-35.996 154.048-15.293 19.23-5.01 45.704-5.628 97.968 14.394v.05zm-103.426-12.87c-95.525-16.98-148.316-.301-147.947 12.966.047-.044.096-.09.146-.133-.05.059-.073.12-.117.18.044 1.19.494 2.35 1.404 3.458-.865-.77-1.51-1.575-1.931-2.408-2.018 8.55 42.808 21.37 122.653-5.27 8.83-2.217 16.588-5.872 25.792-8.794zM50.94 298.54c.097.087.186.173.288.258v.098c-.107-.117-.191-.237-.288-.355zm-1.287-3.637c.05-.06.09-.122.145-.182v.046c-.054.044-.094.09-.145.136z" />
    </g>
  </svg>
);

export default SvgUnderline;
