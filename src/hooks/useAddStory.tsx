import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
export const useAddStory = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (data: any) => {
      const res = await axios.post("http://localhost:3000/stories", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      navigate("/StoryList");
    },
  });
};