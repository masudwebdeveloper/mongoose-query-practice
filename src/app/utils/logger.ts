import dayjs from "dayjs";
import pino from "pino";
import pinoPretty, { PinoPretty } from "pino-pretty";

const log = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
  prettifier: PinoPretty,
  timestamp: () => `,"time":"${dayjs().format()}"`,
});

export { log };
