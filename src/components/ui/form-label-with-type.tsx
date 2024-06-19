interface FormLabelWithType {
  title: string;
  type: "string" | "number";
}

const FormLabelWithType = ({ title, type }: FormLabelWithType) => {
  return (
    <div className="flex flex-row space-x-2">
      <p>{title}</p>
      <p className="text-xs text-muted-foreground">{type}</p>
    </div>
  );
};

export default FormLabelWithType;
