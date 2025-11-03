import { ReactNode } from "react";
import StaffProtectionIcon from "./icons/StaffProtectionIcon";
import RoomSecurityIcon from "./icons/RoomSecurityIcon";
import InfraredTriggerIcon from "./icons/InfraredTriggerIcon";
import VideoMonitoringIcon from "./icons/VideoMonitoringIcon";
import VoiceWarningsIcon from "./icons/VoiceWarningsIcon";
import ManualOverrideIcon from "./icons/ManualOverrideIcon";

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Staff Protection",
    description: "Ensuring Safety for Every Staff Member",
    icon: <StaffProtectionIcon/>,
  },
  {
    id: 2,
    title: "Room Security",
    description: "Protecting Rooms with Advanced Security Measures",
    icon: <RoomSecurityIcon />,
  },
  {
    id: 3,
    title: "Infrared Trigger",
    description: "Smart Detection for Enhanced Safety",
    icon: <InfraredTriggerIcon />,
  },
  {
    id: 4,
    title: "Video Monitoring",
    description: "24/7 Surveillance for Enhanced Security",
    icon: <VideoMonitoringIcon />,
  },
  {
    id: 5,
    title: "Voice Warnings",
    description: "Real-Time Voice Alerts for Quick Response",
    icon: <VoiceWarningsIcon />,
  },
  {
    id: 6,
    title: "Manual Override",
    description: "Uninterrupted Operation Through Manual Control",
    icon: <ManualOverrideIcon />,
  },
];
