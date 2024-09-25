variable "app_name" {
  type    = string
  default = "alexandria"
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "app_domain" {
  type = string
}

variable "environment" {
  type = string
}

variable "domain_prefix" {
  type = string
  default = environment == "production" ? "" : "${var.environment}."
}