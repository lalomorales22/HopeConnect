export interface ResourceData {
  name: string;
  phone: string;
  address: string;
  services: string;
}

export const resourceData: Record<string, ResourceData> = {
  food: {
    name: "San Diego Food Bank",
    phone: "+18585271419",
    address: "9850 Distribution Avenue, San Diego, CA 92121",
    services: "Provides emergency food assistance through various programs and distribution sites."
  },
  shelter: {
    name: "Father Joe's Villages",
    phone: "+16192338500",
    address: "1501 Imperial Avenue, San Diego, CA 92101",
    services: "Offers emergency shelter, transitional housing, and supportive services for individuals and families experiencing homelessness."
  },
  transport: {
    name: "On the Go by Jewish Family Service",
    phone: "+18586373210",
    address: "8804 Balboa Avenue, San Diego, CA 92123",
    services: "Provides transportation solutions for older adults, including shuttles, excursions, and individual rides."
  },
  health: {
    name: "UC San Diego Student-Run Free Clinic Project",
    phone: "+16195152300",
    address: "1506 National Avenue, San Diego, CA 92113",
    services: "Offers free medical care to underserved communities at multiple locations."
  },
  housing: {
    name: "San Diego Housing Commission",
    phone: "+16192319400",
    address: "1122 Broadway, Suite 300, San Diego, CA 92101",
    services: "Provides affordable housing programs and resources for low-income individuals and families."
  },
  hygiene: {
    name: "Neil Good Day Center",
    phone: "+16192338500",
    address: "299 17th Street, San Diego, CA 92101",
    services: "Offers showers, laundry facilities, and other basic services for individuals experiencing homelessness."
  },
  crisis: {
    name: "San Diego Access and Crisis Line",
    phone: "+18887247240",
    services: "Provides 24/7 confidential crisis intervention and support services.",
    address: ""
  },
  education: {
    name: "San Diego Continuing Education",
    phone: "+16193884956",
    address: "4343 Ocean View Boulevard, San Diego, CA 92113",
    services: "Offers free adult education programs, including ESL, GED preparation, and vocational training."
  },
  jobs: {
    name: "San Diego Workforce Partnership",
    phone: "+16192282900",
    address: "9246 Lightwave Avenue, Suite 210, San Diego, CA 92123",
    services: "Provides employment services, job training, and career development resources."
  },
  mail: {
    name: "Father Joe's Villages Mail Services",
    phone: "+16192338500",
    address: "1501 Imperial Avenue, San Diego, CA 92101",
    services: "Offers mail services for individuals experiencing homelessness."
  }
};