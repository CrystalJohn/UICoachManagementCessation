import React, { useState } from "react";
import {
  Card,
  Avatar,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Calendar,
  Badge,
  List,
  Tag,
  Divider,
} from "antd";
import {
  CalendarOutlined,
  VideoCameraOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export const Appointments = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Mock appointments data
  const appointments = [
    {
      id: 1,
      name: "Matthew Paul",
      time: "09:00 AM",
      duration: "60 min",
      type: "Video Session",
      status: "upcoming",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "2024-01-15",
      notes: "Follow-up on smoking cessation progress",
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      time: "11:30 AM",
      duration: "45 min",
      type: "Video Session",
      status: "upcoming",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "2024-01-15",
      notes: "Initial consultation for smoking cessation",
    },
    {
      id: 3,
      name: "David Chen",
      time: "02:00 PM",
      duration: "30 min",
      type: "Phone Call",
      status: "completed",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "2024-01-14",
      notes: "Weekly check-in call",
    },
    {
      id: 4,
      name: "Emily Johnson",
      time: "04:30 PM",
      duration: "60 min",
      type: "Video Session",
      status: "cancelled",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "2024-01-14",
      notes: "Cancelled due to client emergency",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "upcoming":
        return "blue";
      case "completed":
        return "green";
      case "cancelled":
        return "red";
      default:
        return "default";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "upcoming":
        return "Upcoming";
      case "completed":
        return "Completed";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  const todayAppointments = appointments.filter(apt => apt.date === "2024-01-15");
  const upcomingAppointments = appointments.filter(apt => apt.status === "upcoming");

  return (
    <>
      <Title level={2} style={{ marginBottom: 24 }}>
        Appointments Management
      </Title>

      <Row gutter={24}>
        <Col span={16}>
          {/* Today's Schedule */}
          <Card 
            title="Today's Schedule" 
            style={{ marginBottom: 24, borderRadius: 12 }}
            extra={
              <Space>
                <CalendarOutlined />
                <Text type="secondary">January 15, 2024</Text>
              </Space>
            }
          >
            <List
              dataSource={todayAppointments}
              renderItem={(appointment) => (
                <List.Item
                  style={{
                    padding: "16px 0",
                    borderRadius: 8,
                  }}
                >
                  <Card
                    style={{ 
                      width: "100%", 
                      borderRadius: 8,
                      backgroundColor: "#fafafa"
                    }}
                    bodyStyle={{ padding: 16 }}
                  >
                    <Row justify="space-between" align="middle">
                      <Col span={16}>
                        <Space size={16}>
                          <Avatar size={48} src={appointment.avatar}>
                            {appointment.name.split(" ").map(n => n[0]).join("")}
                          </Avatar>
                          <div>
                            <Title level={5} style={{ margin: 0, marginBottom: 4 }}>
                              {appointment.name}
                            </Title>
                            <Space size={16}>
                              <Space size={4}>
                                <ClockCircleOutlined style={{ color: "#666" }} />
                                <Text type="secondary">
                                  {appointment.time} ({appointment.duration})
                                </Text>
                              </Space>
                              <Space size={4}>
                                <VideoCameraOutlined style={{ color: "#666" }} />
                                <Text type="secondary">{appointment.type}</Text>
                              </Space>
                            </Space>
                            {appointment.notes && (
                              <Text type="secondary" style={{ fontSize: 12, display: "block", marginTop: 4 }}>
                                {appointment.notes}
                              </Text>
                            )}
                          </div>
                        </Space>
                      </Col>
                      <Col span={8} style={{ textAlign: "right" }}>
                        <Space direction="vertical" size={8} align="end">
                          <Tag color={getStatusColor(appointment.status)}>
                            {getStatusText(appointment.status)}
                          </Tag>
                          {appointment.status === "upcoming" && (
                            <Space size={8}>
                              <Button 
                                type="primary" 
                                size="small"
                                icon={<VideoCameraOutlined />}
                                style={{ borderRadius: 6 }}
                              >
                                Join Meeting
                              </Button>
                              <Button 
                                type="default" 
                                size="small"
                                style={{ borderRadius: 6 }}
                              >
                                Reschedule
                              </Button>
                            </Space>
                          )}
                        </Space>
                      </Col>
                    </Row>
                  </Card>
                </List.Item>
              )}
            />
          </Card>

          {/* All Appointments */}
          <Card 
            title="All Appointments" 
            style={{ borderRadius: 12 }}
            extra={
              <Button type="primary" style={{ borderRadius: 6 }}>
                Schedule New
              </Button>
            }
          >
            <List
              dataSource={appointments}
              renderItem={(appointment) => (
                <List.Item
                  style={{
                    padding: "12px 0",
                  }}
                >
                  <Row style={{ width: "100%" }} justify="space-between" align="middle">
                    <Col span={12}>
                      <Space size={12}>
                        <Avatar size={40} src={appointment.avatar}>
                          {appointment.name.split(" ").map(n => n[0]).join("")}
                        </Avatar>
                        <div>
                          <Text strong>{appointment.name}</Text>
                          <br />
                          <Text type="secondary" style={{ fontSize: 12 }}>
                            {appointment.date} at {appointment.time}
                          </Text>
                        </div>
                      </Space>
                    </Col>
                    <Col span={6}>
                      <Text type="secondary">{appointment.type}</Text>
                    </Col>
                    <Col span={4}>
                      <Tag color={getStatusColor(appointment.status)}>
                        {getStatusText(appointment.status)}
                      </Tag>
                    </Col>
                    <Col span={2} style={{ textAlign: "right" }}>
                      <Button type="text" size="small">
                        View
                      </Button>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </Card>
        </Col>

        <Col span={8}>
          {/* Calendar */}
          <Card 
            title="Calendar" 
            style={{ marginBottom: 24, borderRadius: 12 }}
          >
            <Calendar
              fullscreen={false}
              onSelect={setSelectedDate}
              dateCellRender={(value) => {
                const dateStr = value.format("YYYY-MM-DD");
                const dayAppointments = appointments.filter(apt => apt.date === dateStr);
                return (
                  <div>
                    {dayAppointments.map(apt => (
                      <Badge
                        key={apt.id}
                        status={apt.status === "upcoming" ? "processing" : "default"}
                        text=""
                        style={{ display: "block", fontSize: 8 }}
                      />
                    ))}
                  </div>
                );
              }}
            />
          </Card>

          {/* Quick Stats */}
          <Card 
            title="Quick Stats" 
            style={{ borderRadius: 12 }}
          >
            <Space direction="vertical" size={16} style={{ width: "100%" }}>
              <Row justify="space-between">
                <Text type="secondary">Today's Sessions</Text>
                <Text strong style={{ color: "#1890ff" }}>
                  {todayAppointments.length}/5
                </Text>
              </Row>
              <Divider style={{ margin: 0 }} />
              <Row justify="space-between">
                <Text type="secondary">This Week</Text>
                <Text strong style={{ color: "#52c41a" }}>12</Text>
              </Row>
              <Divider style={{ margin: 0 }} />
              <Row justify="space-between">
                <Text type="secondary">Upcoming</Text>
                <Text strong style={{ color: "#faad14" }}>
                  {upcomingAppointments.length}
                </Text>
              </Row>
              <Divider style={{ margin: 0 }} />
              <Row justify="space-between">
                <Text type="secondary">Completion Rate</Text>
                <Text strong style={{ color: "#0d9488" }}>94%</Text>
              </Row>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
};