resource "aws_route53_record" "phillstack_com_A" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "phillstack.com."
  type = "A"
  alias {
    name = "d121v952zrdhj3.cloudfront.net."
    zone_id = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
  allow_overwrite = true
}

resource "aws_route53_record" "phillstack_com_MX" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "phillstack.com."
  type = "MX"
  ttl = 300
  records = [
    "15 ewtquzli66cd7inselvijxvmmtjxkkyqu4fy774htjzektgcxhdq.mx-verification.google.com.",
    "1 ASPMX.L.GOOGLE.COM",
    "5 ALT1.ASPMX.L.GOOGLE.COM",
    "5 ALT2.ASPMX.L.GOOGLE.COM",
    "10 ALT3.ASPMX.L.GOOGLE.COM",
    "10 ALT4.ASPMX.L.GOOGLE.COM",
  ]
  allow_overwrite = true
}

resource "aws_route53_record" "phillstack_com_TXT" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "phillstack.com."
  type = "TXT"
  ttl = 300
  records = [
    "v=spf1 include:spf.mandrillapp.com ?all",
  ]
  allow_overwrite = true
}

resource "aws_route53_record" "phillstack_com_aws_acm_19b2f7bed6e5a2bb51a755385d5a763b_phillstack_com_CNAME" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "_19b2f7bed6e5a2bb51a755385d5a763b.phillstack.com."
  type = "CNAME"
  ttl = 300
  records = [
    "_e464b44823bdb0b75e13d073ab3db817.hkvuiqjoua.acm-validations.aws.",
  ]
  allow_overwrite = true
}

resource "aws_route53_record" "phillstack_com_mandrill_domainkey_TXT" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "mandrill._domainkey.phillstack.com."
  type = "TXT"
  ttl = 300
  records = [
    "v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/mRwSRMAocV/hMB3jXwaHH36d9NaVynQFYV8NaWi69c1veUtRzGt7yAioXqLj7Z4TeEUoOLgrKsn8YnckGs9i3B3tVFB+Ch/4mPhXWiNfNdynHWBcPcbJ8kjEQ2U8y78dHZj1YeRXXVvWob2OaKynO8/lQIDAQAB;",
  ]
  allow_overwrite = true
}

resource "aws_route53_record" "phillstack_com_blog_CNAME" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "blog.phillstack.com."
  type = "CNAME"
  ttl = 300
  records = [
    "xdn.xfq.mybluehost.me.",
  ]
  allow_overwrite = true
}

resource "aws_route53_record" "phillstack_com_www_A" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "www.phillstack.com."
  type = "A"
  alias {
    name = "d121v952zrdhj3.cloudfront.net."
    zone_id = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
  allow_overwrite = true
}

resource "aws_route53_record" "phillstack_com_aws_acm_ccd863db8616c990333bf598c8f79ee5_www_phillstack_com_CNAME" {
  zone_id = aws_route53_zone.phillstack_com.zone_id
  name = "_ccd863db8616c990333bf598c8f79ee5.www.phillstack.com."
  type = "CNAME"
  ttl = 300
  records = [
    "_c1e2e37b9135c8f7f463e3df96d2ea9a.ltfvzjuylp.acm-validations.aws.",
  ]
  allow_overwrite = true
}

