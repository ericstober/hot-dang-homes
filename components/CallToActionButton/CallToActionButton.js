import { ButtonLink } from "components/ButtonLink";

export const CallToActionButton = ({
  alignment = "left",
  buttonLabel,
  destination,
}) => {
  const alignmentMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={alignmentMap[alignment]}>
      <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  );
};
