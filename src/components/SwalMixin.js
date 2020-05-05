import Swal from "sweetalert2";
export const fireStatus = (
  status,
  success = "Success",
  failed = "Something went wrong!"
) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: status ? "success" : "error",
    title: status ? success : failed,
  });
};
