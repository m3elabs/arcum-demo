import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { theme } from "src/theme";
import { useAuth } from "src/contexts/AuthUserContext";
import axios from "axios";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const datasetConfig = {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
};

export default function Chart({ data, options = {} }) {
    const { authUser } = useAuth();
    const defaultOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
        ...options,
    };

    return <Line options={defaultOptions} onMouseOver={async () => await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/examineChart?company=${authUser.companyId}`).then((res) => {
      if (res.data.error) {
          console.log(res.data.error);
      }})} data={data} height={300} />;
}
