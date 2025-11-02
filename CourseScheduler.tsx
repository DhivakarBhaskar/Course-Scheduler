import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Calendar, Clock, Filter, User, Sunrise, Sun, Sunset } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TimeSlot {
  day: string;
  times: string[];
}

interface CourseSection {
  id: string;
  instructor: string;
  dept: string;
  slots: TimeSlot[];
}

interface CoursesData {
  [courseName: string]: CourseSection[];
}

const CourseScheduler = () => {
  const courses: CoursesData = {
    "Basic Electrical, Electronics and Measurement Engineering": [
      { id: "3P3-1", instructor: "ROHINI G", dept: "EEE", slots: [
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "3T2-1", instructor: "LOGESH K", dept: "EEE", slots: [
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3W2-1", instructor: "NARESH V", dept: "EEE", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Monday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3V1-2", instructor: "NARESH V", dept: "EEE", slots: [
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "3X3-1", instructor: "DAYANIDHY M", dept: "EEE", slots: [
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "4Q3-1", instructor: "Narendiran S", dept: "EEE", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "3R1-1", instructor: "ROHINI G", dept: "EEE", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "3Z2-1", instructor: "DAYANIDHY M", dept: "EEE", slots: [
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4I4-1", instructor: "MUTHUVEL P", dept: "EEE", slots: [
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3R3-1", instructor: "LOGESH K", dept: "EEE", slots: [
        { day: "Saturday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4E5-1", instructor: "MUTHUVEL P", dept: "EEE", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00"] }
      ]}
    ],
    "Calculus and Matrix Algebra": [
      { id: "4Z2-1", instructor: "Anandan V", dept: "Maths", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4Y2-1", instructor: "Premila S C", dept: "Maths", slots: [
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4Y4-3", instructor: "Rajaraman R", dept: "Maths", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Monday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4X3-2", instructor: "EUNICE JEMIMA PETER", dept: "Maths", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "4W4-1", instructor: "SWARNALATHA R", dept: "Maths", slots: [
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00"] },
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "4W5-1", instructor: "SUREKHA S S", dept: "Maths", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Saturday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4Y1-1", instructor: "VINODHINI N", dept: "Maths", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4U5-1", instructor: "KEERTHANA R", dept: "Maths", slots: [
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4U1-2", instructor: "KEERTHANA R", dept: "Maths", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4V3-2", instructor: "SWARNALATHA R", dept: "Maths", slots: [
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]}
    ],
    "Computer Architecture": [
      { id: "4A3-1", instructor: "Sriram K", dept: "CSE", slots: [
        { day: "Monday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4H6-1", instructor: "Sriram K", dept: "CSE", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "4U4-2", instructor: "ELANGOVAN D", dept: "CSE", slots: [
        { day: "Monday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4U1-1", instructor: "ELANGOVAN D", dept: "CSE", slots: [
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00", "15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4D5-2", instructor: "Sriram K", dept: "CSE", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "4S2-2", instructor: "SELVIN PREM KUMAR S", dept: "CSE", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4P3-1", instructor: "SELVIN PREM KUMAR S", dept: "CSE", slots: [
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4T2-3", instructor: "ELANGOVAN D", dept: "CSE", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]}
    ],
    "Digital Electronics": [
      { id: "3R2-1", instructor: "FERMINUS RAJ A", dept: "EEE", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "3U3-1", instructor: "SUGUNA DEVI R", dept: "EEE", slots: [
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3Z1-1", instructor: "MANIKANDAN SP", dept: "EEE", slots: [
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4A5-1", instructor: "FERMINUS RAJ A", dept: "EEE", slots: [
        { day: "Friday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Monday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3X2-1", instructor: "Hari U", dept: "EEE", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4V1-1", instructor: "DURGA DEVI A", dept: "EEE", slots: [
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3W1-2", instructor: "SUGUNA DEVI R", dept: "EEE", slots: [
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4H5-1", instructor: "POOVANNAN E", dept: "EEE", slots: [
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Tuesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "3Q3-1", instructor: "BHANU PRIYA P", dept: "EEE", slots: [
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3T1-1", instructor: "POOVANNAN E", dept: "EEE", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Saturday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4U3-1A", instructor: "Srinivasan P", dept: "EEE", slots: [
        { day: "Saturday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3P2-1", instructor: "BHANU PRIYA P", dept: "EEE", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] }
      ]}
    ],
    "Engineering Design and Modelling": [
      { id: "3Q2-1", instructor: "SATISH KUMAR D", dept: "AI", slots: [
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3S2-1", instructor: "Madhan Kumar A", dept: "AI", slots: [
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "3X1-1", instructor: "Udayaranganaik C", dept: "AI", slots: [
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4U4-1", instructor: "MUTHUKUMAR V", dept: "AI", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3R1-2", instructor: "NIRMAL KUMAR K", dept: "AI", slots: [
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "3V3-1", instructor: "Udayaranganaik C", dept: "AI", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "4S5-1", instructor: "Prakash R", dept: "AI", slots: [
        { day: "Friday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3Y2-1", instructor: "Saravanan M P", dept: "AI", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4N1-2", instructor: "Thamarai Selvan A", dept: "AI", slots: [
        { day: "Saturday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4T6-1", instructor: "Shenbagaraman S", dept: "AI", slots: [
        { day: "Friday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Saturday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4A2-2", instructor: "SELVAM R", dept: "AI", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] }
      ]}
    ],
    "Mathematics for Artificial Intelligence": [
      { id: "4S6-1", instructor: "RAMESH KUMAR M", dept: "AI", slots: [
        { day: "Monday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4S2-3", instructor: "RAMESH KUMAR M", dept: "AI", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Saturday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] }
      ]}
    ],
    "Physics for Quantum Computing": [
      { id: "4F5-1", instructor: "Priya M", dept: "PHYSICS", slots: [
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4J4-1", instructor: "Sangeetha L", dept: "PHYSICS", slots: [
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4T3-2", instructor: "Sivakumar T", dept: "PHYSICS", slots: [
        { day: "Monday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "4Q6-1", instructor: "THENNARASU S", dept: "PHYSICS", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Thursday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "4S3-1", instructor: "Silambarasan M", dept: "PHYSICS", slots: [
        { day: "Saturday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3Q1-2", instructor: "Ganapathi Raman", dept: "PHYSICS", slots: [
        { day: "Friday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Thursday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4T1-1", instructor: "Silambarasan M", dept: "PHYSICS", slots: [
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Thursday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4V1-2", instructor: "Ganapathi Raman", dept: "PHYSICS", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] }
      ]}
    ],
    "Principles of Chemistry in Engineering": [
      { id: "3R1-3", instructor: "B MOHAMAD ALI", dept: "CHEMISTRY", slots: [
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "4K4-1T", instructor: "Yamini B", dept: "CHEMISTRY", slots: [
        { day: "Friday", times: ["13:00-14:00", "14:00-15:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Monday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4U2-1", instructor: "Mettilda M", dept: "CHEMISTRY", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "4T2-1", instructor: "Vivekanand P A", dept: "CHEMISTRY", slots: [
        { day: "Monday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00", "10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "3O3-1", instructor: "Mettilda M", dept: "CHEMISTRY", slots: [
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3W1-1", instructor: "SHANTHI S", dept: "CHEMISTRY", slots: [
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3S3-1", instructor: "B MOHAMAD ALI", dept: "CHEMISTRY", slots: [
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "3Y3-1", instructor: "DOLLI H", dept: "CHEMISTRY", slots: [
        { day: "Thursday", times: ["15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "3Z3-1", instructor: "DOLLI H", dept: "CHEMISTRY", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "4G5-1", instructor: "Yamini B", dept: "CHEMISTRY", slots: [
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] },
        { day: "Tuesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4R3-1", instructor: "Lavanya G", dept: "CHEMISTRY", slots: [
        { day: "Friday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Saturday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "4T4-1", instructor: "Vivekanand P A", dept: "CHEMISTRY", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00"] }
      ]},
      { id: "4S3-2", instructor: "Lavanya G", dept: "CHEMISTRY", slots: [
        { day: "Saturday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Thursday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "3U1-1", instructor: "SHANTHI S", dept: "CHEMISTRY", slots: [
        { day: "Friday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] },
        { day: "Saturday", times: ["10:00-11:00", "11:00-12:00"] }
      ]}
    ],
    "Probability and Queueing Models": [
      { id: "3P1-1", instructor: "Jayasankari Chandramohan", dept: "Maths", slots: [
        { day: "Friday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]},
      { id: "4J3-1", instructor: "USHA M", dept: "Maths", slots: [
        { day: "Saturday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["15:00-16:00", "16:00-17:00"] }
      ]}
    ],
    "Prompt Engineering": [
      { id: "4T2-2", instructor: "RAMESH KUMAR S", dept: "AI", slots: [
        { day: "Monday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] }
      ]}
    ],
    "Statistics and Numerical Methods": [
      { id: "4W2-1", instructor: "Sivan V", dept: "Maths", slots: [
        { day: "Saturday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Thursday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Tuesday", times: ["10:00-11:00", "11:00-12:00", "13:00-14:00", "14:00-15:00"] }
      ]},
      { id: "4T3-1", instructor: "Sravya P R", dept: "Maths", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Saturday", times: ["10:00-11:00", "11:00-12:00"] },
        { day: "Thursday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Tuesday", times: ["08:00-09:00", "09:00-10:00"] }
      ]},
      { id: "4F4-1", instructor: "Kuppan A", dept: "Maths", slots: [
        { day: "Friday", times: ["08:00-09:00", "09:00-10:00"] },
        { day: "Saturday", times: ["13:00-14:00", "14:00-15:00"] },
        { day: "Wednesday", times: ["10:00-11:00", "11:00-12:00", "15:00-16:00", "16:00-17:00"] }
      ]}
    ]
  };

  const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const timeSlots = [
    "08:00-10:00",
    "10:00-12:00",
    "13:00-15:00",
    "15:00-17:00"
  ];
  
  const [selectedCourses, setSelectedCourses] = useState<string[]>(Object.keys(courses));
  const [excludedDays, setExcludedDays] = useState<string[]>([]);
  const [preferredTimeSlots, setPreferredTimeSlots] = useState<string[]>([]);
  const [facultyPreferences, setFacultyPreferences] = useState<{[course: string]: string}>({});
  const [validCombinations, setValidCombinations] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const toggleCourse = (course: string) => {
    setSelectedCourses(prev => 
      prev.includes(course) ? prev.filter(c => c !== course) : [...prev, course]
    );
  };

  const toggleDay = (day: string) => {
    setExcludedDays(prev => 
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  const toggleTimeSlot = (slot: string) => {
    setPreferredTimeSlots(prev =>
      prev.includes(slot) ? prev.filter(s => s !== slot) : [...prev, slot]
    );
  };

  const setFacultyPreference = (course: string, faculty: string) => {
    setFacultyPreferences(prev => ({
      ...prev,
      [course]: faculty
    }));
  };

  const getTimeCategory = (time: string): string => {
    const hour = parseInt(time.split(':')[0]);
    if (hour >= 8 && hour < 10) return "08:00-10:00";
    if (hour >= 10 && hour < 13) return "10:00-12:00";
    if (hour >= 13 && hour < 15) return "13:00-15:00";
    if (hour >= 15 && hour < 17) return "15:00-17:00";
    return "08:00-10:00"; // default fallback
  };

  const matchesTimePreference = (section: CourseSection): boolean => {
    if (preferredTimeSlots.length === 0) return true;
    
    return section.slots.some(slot =>
      slot.times.some(time => {
        const category = getTimeCategory(time);
        return preferredTimeSlots.includes(category);
      })
    );
  };

  const hasConflict = (section1: CourseSection, section2: CourseSection): boolean => {
    for (const slot1 of section1.slots) {
      for (const slot2 of section2.slots) {
        if (slot1.day === slot2.day) {
          for (const time1 of slot1.times) {
            if (slot2.times.includes(time1)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  };

  const hasExcludedDay = (section: CourseSection): boolean => {
    return section.slots.some(slot => excludedDays.includes(slot.day));
  };

  const findValidCombinations = () => {
    const selectedCoursesData = selectedCourses.map(course => ({
      name: course,
      sections: courses[course].filter(section => {
        // Filter by faculty preference if set
        if (facultyPreferences[course] && facultyPreferences[course] !== "any") {
          if (section.instructor !== facultyPreferences[course]) return false;
        }
        // Filter by time preference
        if (!matchesTimePreference(section)) return false;
        return true;
      })
    }));

    if (selectedCoursesData.length === 0) {
      setValidCombinations([]);
      setShowResults(true);
      return;
    }

    const results: any[] = [];
    
    function backtrack(index: number, currentCombination: any[]) {
      if (index === selectedCoursesData.length) {
        results.push([...currentCombination]);
        return;
      }

      const currentCourse = selectedCoursesData[index];
      
      for (const section of currentCourse.sections) {
        if (hasExcludedDay(section)) continue;
        
        let conflict = false;
        for (const selectedSection of currentCombination) {
          if (hasConflict(section, selectedSection)) {
            conflict = true;
            break;
          }
        }

        if (!conflict) {
          currentCombination.push({ course: currentCourse.name, ...section });
          backtrack(index + 1, currentCombination);
          currentCombination.pop();
        }
      }
    }

    backtrack(0, []);
    setValidCombinations(results);
    setShowResults(true);
  };

  const getScheduleByDay = (combination: any[]) => {
    const schedule: {[day: string]: any[]} = {};
    allDays.forEach(day => schedule[day] = []);

    combination.forEach(section => {
      section.slots.forEach((slot: TimeSlot) => {
        slot.times.forEach(time => {
          schedule[slot.day].push({
            course: section.course,
            instructor: section.instructor,
            id: section.id,
            time: time
          });
        });
      });
    });

    Object.keys(schedule).forEach(day => {
      schedule[day].sort((a, b) => a.time.localeCompare(b.time));
    });

    return schedule;
  };

  const getUniqueFaculty = (courseName: string): string[] => {
    const facultySet = new Set<string>();
    courses[courseName].forEach(section => facultySet.add(section.instructor));
    return Array.from(facultySet).sort();
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-3xl">
              <Calendar className="w-8 h-8 text-primary" />
              Course Schedule Optimizer
            </CardTitle>
            <CardDescription className="text-base">
              Select courses, preferred faculty, timing, and days off to find your perfect schedule
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Course Selection */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-primary" />
                Select Courses & Faculty
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                {Object.keys(courses).map(course => {
                  const uniqueFaculty = getUniqueFaculty(course);
                  return (
                    <div key={course} className="border rounded-lg p-4 space-y-3 hover:border-primary/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id={course}
                          checked={selectedCourses.includes(course)}
                          onCheckedChange={() => toggleCourse(course)}
                          className="mt-1"
                        />
                        <Label htmlFor={course} className="text-sm font-medium cursor-pointer flex-1">
                          {course}
                        </Label>
                      </div>
                      
                      {selectedCourses.includes(course) && uniqueFaculty.length > 1 && (
                        <div className="ml-7 flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <Select
                            value={facultyPreferences[course] || "any"}
                            onValueChange={(value) => setFacultyPreference(course, value)}
                          >
                            <SelectTrigger className="h-9 text-sm">
                              <SelectValue placeholder="Any faculty" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="any">Any Faculty</SelectItem>
                              {uniqueFaculty.map(faculty => (
                                <SelectItem key={faculty} value={faculty}>
                                  {faculty}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Filters */}
          <div className="space-y-6">
            {/* Time Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  Preferred Timing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {timeSlots.map((slot, idx) => {
                  const icons = [Sunrise, Sunrise, Sun, Sunset];
                  const Icon = icons[idx];
                  const labels = ["Early Morning", "Late Morning", "Early Afternoon", "Late Afternoon"];
                  return (
                    <div key={slot} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                      <Checkbox
                        id={slot}
                        checked={preferredTimeSlots.includes(slot)}
                        onCheckedChange={() => toggleTimeSlot(slot)}
                      />
                      <Label htmlFor={slot} className="flex items-center gap-2 cursor-pointer flex-1">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{labels[idx]}</span>
                        <span className="text-xs text-muted-foreground ml-auto">{slot}</span>
                      </Label>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Day Exclusion */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="w-5 h-5 text-primary" />
                  Exclude Days Off
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {allDays.map(day => (
                  <div key={day} className="flex items-center gap-3 p-2 rounded-lg hover:bg-destructive/10 transition-colors">
                    <Checkbox
                      id={day}
                      checked={excludedDays.includes(day)}
                      onCheckedChange={() => toggleDay(day)}
                    />
                    <Label htmlFor={day} className="cursor-pointer flex-1 text-sm font-medium">
                      {day}
                    </Label>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Button
              onClick={findValidCombinations}
              disabled={selectedCourses.length === 0}
              className="w-full h-12 text-base font-semibold"
              size="lg"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              Find Valid Schedules
            </Button>
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                Results: {validCombinations.length} Valid Schedule{validCombinations.length !== 1 ? 's' : ''} Found
              </CardTitle>
            </CardHeader>
            <CardContent>
              {validCombinations.length === 0 ? (
                <div className="text-center py-12">
                  <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                  <p className="text-xl font-medium text-foreground mb-2">
                    No conflict-free schedules found
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Try selecting fewer courses or removing filters
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {validCombinations.map((combination, idx) => {
                    const schedule = getScheduleByDay(combination);
                    return (
                      <Card key={idx} className="border-2 border-primary/20">
                        <CardHeader className="bg-accent">
                          <CardTitle className="text-xl">
                            Schedule Option {idx + 1}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                          {/* Selected Sections */}
                          <div className="grid md:grid-cols-2 gap-3">
                            {combination.map((section: any, i: number) => (
                              <div key={i} className="border rounded-lg p-3 bg-card hover:shadow-md transition-shadow">
                                <div className="font-semibold text-sm mb-1">{section.course}</div>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                  <Badge variant="secondary">{section.id}</Badge>
                                  <span>•</span>
                                  <span>{section.instructor}</span>
                                  <span>({section.dept})</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Weekly Schedule */}
                          <div className="border rounded-lg p-4 bg-muted/30">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-primary" />
                              Weekly Schedule
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                              {allDays.map(day => (
                                <div key={day} className={schedule[day].length > 0 ? "border-l-4 border-primary pl-3" : "opacity-50 pl-3"}>
                                  <div className="font-semibold text-sm mb-1">{day}</div>
                                  {schedule[day].length > 0 ? (
                                    <div className="space-y-1">
                                      {schedule[day].map((item: any, i: number) => (
                                        <div key={i} className="text-xs bg-primary/10 rounded px-2 py-1.5 flex items-center gap-2">
                                          <Clock className="w-3 h-3" />
                                          <span className="font-medium">{item.time}</span>
                                          <span>•</span>
                                          <span className="flex-1">{item.course}</span>
                                          <Badge variant="outline" className="text-xs">{item.id}</Badge>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="text-xs text-muted-foreground italic">No classes</div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CourseScheduler;
