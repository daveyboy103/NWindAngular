export interface ICustomer {
  /*
  string Address { get; set; }
string City { get; set; }
string CompanyName { get; set; }
string ContactName { get; set; }
string ContactTitle { get; set; }
string Country { get; set; }
ICollection<CustomerCustomerDemo> CustomerCustomerDemos { get; set; }
string CustomerId { get; set; }
string Fax { get; set; }
ICollection<Order> Orders { get; set; }
string Phone { get; set; }
string PostalCode { get; set; }
string Region { get; set; }
   */
  address : string;
  city: string;
  companyName: string;
  contactName: string;
  contactTitle: string;
  country: string;
  customerId: number;
  fax: string;
  phone: string;
  postalCode: string;
  region: string
}
