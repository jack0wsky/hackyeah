import { ApiClient } from "@/clients/api-client";
import { useAuth } from "@/store/index";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import { Routes } from "@/constants/routes";

interface LoginPayload {
  username: string;
  password: string;
}
export const useLogin = () => {
  const api = new ApiClient();

  const { saveToken } = useAuth();
  const router = useRouter();

  const { mutate, isLoading } = useMutation(
    (data: LoginPayload) => api.login(data),
    {
      onSuccess: ({ data }) => {
        saveToken(data.token);
        router.push(Routes.MyAccount);
      },
    }
  );

  return {
    login: mutate,
    loading: isLoading,
  };
};
