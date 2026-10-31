"use client";

import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";
import { BsDash } from "react-icons/bs";
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
          style={{ color: "#087e8b", marginTop: "25px" }}
        />
      )}
    </Button>
  );
}
