import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function PriceFormSubmit() {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit">
      {pending ? (
        "Übermitteln ..."
      ) : (
        <IoIosArrowRoundForward
          size={35}
          style={{ color: "#009d81", marginTop: "25px" }}
        />
      )}
    </Button>
  );
}
