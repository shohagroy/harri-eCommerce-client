import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function EditTools({ value, setValue }) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder={"Please Enter Product Description..."}
    />
  );
}

export default EditTools;
