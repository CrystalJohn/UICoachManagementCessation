import React, { useState } from "react";
import {
  Card,
  Avatar,
  Button,
  Typography,
  Space,
  Row,
  Col,
  Input,
  Select,
  Progress,
  Tag,
  Statistic,
} from "antd";
import {
  SearchOutlined,
  MessageOutlined,
  MailOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

export const Clients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock client data based on the image
  const clients = [
    {
      id: 1,
      name: "Matthew Paul",
      email: "james.wilson@example.com",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      joinDate: "December 10, 2023",
      status: "Premium",
      smokeFreedays: 15,
      cigarettesAvoided: 300,
      moneySaved: 200,
      cravingLevel: "High", // High, Moderate, Low
      cravingProgress: 85,
    },
    {
      id: 2,
      name: "Sophia Rodriguez",
      email: "sophia.rodriguez@example.com",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      joinDate: "November 25, 2023",
      status: "Premium",
      smokeFreedays: 28,
      cigarettesAvoided: 560,
      moneySaved: 420,
      cravingLevel: "Moderate",
      cravingProgress: 45,
    },
    {
      id: 3,
      name: "David Chen",
      email: "david.chen@example.com",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      joinDate: "January 5, 2024",
      status: "Basic",
      smokeFreedays: 7,
      cigarettesAvoided: 140,
      moneySaved: 105,
      cravingLevel: "Low",
      cravingProgress: 20,
    },
    {
      id: 4,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      joinDate: "October 15, 2023",
      status: "Premium",
      smokeFreedays: 45,
      cigarettesAvoided: 900,
      moneySaved: 675,
      cravingLevel: "Low",
      cravingProgress: 15,
    },
  ];

  const getCravingColor = (level) => {
    switch (level) {
      case "High":
        return "#ff4d4f";
      case "Moderate":
        return "#faad14";
      case "Low":
        return "#52c41a";
      default:
        return "#d9d9d9";
    }
  };

  const getStatusColor = (status) => {
    return status === "Premium" ? "#722ed1" : "#1890ff";
  };

  const filteredClients = clients.filter((client) => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || 
                         client.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Title level={2} style={{ marginBottom: 24 }}>
        Client Management
      </Title>

      {/* Search and Filter */}
      <Row gutter={16} style={{ marginBottom: 24 }}>
        <Col span={12}>
          <Input
            placeholder="Search by name or email"
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ borderRadius: 8 }}
          />
        </Col>
        <Col span={6}>
          <Select
            value={filterStatus}
            onChange={setFilterStatus}
            style={{ width: "100%", borderRadius: 8 }}
          >
            <Option value="all">All clients</Option>
            <Option value="premium">Premium</Option>
            <Option value="basic">Basic</Option>
          </Select>
        </Col>
      </Row>

      {/* Client Cards Grid */}
      <Row gutter={[24, 24]}>
        {filteredClients.map((client) => (
          <Col key={client.id} span={12}>
            <Card
              style={{ 
                borderRadius: 16,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              bodyStyle={{ padding: 24 }}
            >
              {/* Client Header */}
              <div style={{ marginBottom: 20 }}>
                <Row justify="space-between" align="top">
                  <Col>
                    <Space size={16}>
                      <Avatar size={64} src={client.avatar}>
                        {client.name.split(" ").map(n => n[0]).join("")}
                      </Avatar>
                      <div>
                        <Title level={4} style={{ margin: 0, marginBottom: 4 }}>
                          {client.name}
                        </Title>
                        <Space direction="vertical" size={2}>
                          <Space size={8}>
                            <MailOutlined style={{ color: "#666", fontSize: 12 }} />
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              {client.email}
                            </Text>
                          </Space>
                          <Space size={8}>
                            <CalendarOutlined style={{ color: "#666", fontSize: 12 }} />
                            <Text type="secondary" style={{ fontSize: 12 }}>
                              Joined {client.joinDate}
                            </Text>
                          </Space>
                        </Space>
                      </div>
                    </Space>
                  </Col>
                  <Col>
                    <Space direction="vertical" align="end" size={8}>
                      <Tag color={getStatusColor(client.status)}>
                        {client.status}
                      </Tag>
                      <Space size={8}>
                        <Button 
                          type="primary" 
                          size="small"
                          style={{ borderRadius: 6 }}
                        >
                          View Details
                        </Button>
                        <Button 
                          type="default" 
                          size="small" 
                          icon={<MessageOutlined />}
                          style={{ borderRadius: 6 }}
                        />
                      </Space>
                    </Space>
                  </Col>
                </Row>
              </div>

              {/* Progress Overview */}
              <div style={{ 
                backgroundColor: "#fafafa", 
                borderRadius: 12, 
                padding: 16,
                marginBottom: 16 
              }}>
                <Title level={5} style={{ margin: 0, marginBottom: 16 }}>
                  Progress Overview
                </Title>
                
                <Row gutter={24}>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        Smoke-Free Days
                      </Text>
                      <div style={{ 
                        fontSize: 24, 
                        fontWeight: "bold", 
                        color: "#722ed1",
                        marginTop: 4 
                      }}>
                        {client.smokeFreedays}
                      </div>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        Cigarettes Avoided
                      </Text>
                      <div style={{ 
                        fontSize: 24, 
                        fontWeight: "bold", 
                        color: "#0d9488",
                        marginTop: 4 
                      }}>
                        {client.cigarettesAvoided}
                      </div>
                    </div>
                  </Col>
                  <Col span={8}>
                    <div style={{ textAlign: "center" }}>
                      <Text type="secondary" style={{ fontSize: 12 }}>
                        Money Saved
                      </Text>
                      <div style={{ 
                        fontSize: 24, 
                        fontWeight: "bold", 
                        color: "#52c41a",
                        marginTop: 4 
                      }}>
                        ${client.moneySaved}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Craving Intensity */}
              <div>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center",
                  marginBottom: 8 
                }}>
                  <Text strong style={{ fontSize: 14 }}>
                    Craving Intensity
                  </Text>
                  <Tag color={getCravingColor(client.cravingLevel)}>
                    {client.cravingLevel}
                  </Tag>
                </div>
                <Progress
                  percent={client.cravingProgress}
                  strokeColor={getCravingColor(client.cravingLevel)}
                  trailColor="#f0f0f0"
                  strokeWidth={8}
                  showInfo={false}
                  style={{ marginBottom: 8 }}
                />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <Text type="secondary" style={{ fontSize: 11 }}>Low</Text>
                  <Text type="secondary" style={{ fontSize: 11 }}>Moderate</Text>
                  <Text type="secondary" style={{ fontSize: 11 }}>High</Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Summary Stats */}
      <Card 
        style={{ 
          marginTop: 24, 
          borderRadius: 16,
          background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)"
        }}
      >
        <Row gutter={24}>
          <Col span={6}>
            <Statistic
              title="Total Clients"
              value={clients.length}
              valueStyle={{ color: "#0d9488", fontSize: 28 }}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Premium Clients"
              value={clients.filter(c => c.status === "Premium").length}
              valueStyle={{ color: "#722ed1", fontSize: 28 }}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="High Craving Clients"
              value={clients.filter(c => c.cravingLevel === "High").length}
              valueStyle={{ color: "#ff4d4f", fontSize: 28 }}
            />
          </Col>
          <Col span={6}>
            <Statistic
              title="Total Money Saved"
              value={clients.reduce((sum, c) => sum + c.moneySaved, 0)}
              prefix="$"
              valueStyle={{ color: "#52c41a", fontSize: 28 }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};