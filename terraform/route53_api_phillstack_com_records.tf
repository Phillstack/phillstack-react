resource "aws_route53_record" "api_phillstack_com_A" {
  zone_id = aws_route53_zone.api_phillstack_com.zone_id
  name = "api.phillstack.com."
  type = "A"
  alias {
    name = "d-8xovgmhhh6.execute-api.us-west-1.amazonaws.com."
    zone_id = "Z2MUQ32089INYE"
    evaluate_target_health = false
  }
  allow_overwrite = true
}

