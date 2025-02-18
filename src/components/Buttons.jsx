import CopyEmail from "./CopyEmail";
import HireMe from "./HireMe";

export default function Buttons() {
  return (
    <div className="buttons flex items-center justify-center gap-1">
      <HireMe />
      <CopyEmail />
    </div>
  );
}
