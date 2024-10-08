"use client";
import useCommonStore from "@/lib/zustand/common";
import successAnimation from "@/../public/lottie/success.json";
import Lottie from "lottie-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";

export default function SuccessModal() {
  const { isSuccessModalOpen, successMessage, closeSuccessModal } =
    useCommonStore();

  return (
    <AlertDialog
      open={isSuccessModalOpen}
      onOpenChange={() => {
        closeSuccessModal();
      }}
    >
      <AlertDialogContent onClickOutside={() => closeSuccessModal()}>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-3 flex flex-col items-center justify-center">
            <Lottie
              animationData={successAnimation}
              loop={false}
              className="aspect-square w-[100px]"
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-xl text-foreground">
            {successMessage}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
