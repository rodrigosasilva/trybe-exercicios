type ModuleDetailsProps = {
  text: string,
}

function ModuleDetails({ text }: ModuleDetailsProps) {
  return(
    <div>
      <h2>{text}</h2>
    </div>
  );
}

export default ModuleDetails;