interface FormLabelWithType {
  title: string;
  type: "string" | "number";
  desc?: string;
}

const FormLabelWithType = ({ title, type, desc }: FormLabelWithType) => {
  return (
    <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 justify-between">
      <div className="flex flex-row space-x-2">
        <p>{title}</p>
        <p className="text-xs text-muted-foreground">{type}</p>
      </div>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>
  );
};

export default FormLabelWithType;
