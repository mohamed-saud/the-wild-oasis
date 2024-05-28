import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { dublecateCabinApi } from "../../services/apiCabins";

export function useDublecateCabin() {
  const queryClient = useQueryClient();

  const { mutate: dublecatingCabin, isLoading: isDublecating } = useMutation({
    mutationFn: dublecateCabinApi,
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDublecating, dublecatingCabin };
}
