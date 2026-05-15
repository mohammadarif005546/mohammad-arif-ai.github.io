const reports = [
    //Education REPORT 👇
{
  id: 1,
  name: "STUDENT REPORT CARD",
  icon: "📘",
  category: "Education",
  color: "#00c8ff",
  colorRgb: "rgba(0,200,255,0.25)",
  use: "Student marks, grade, percentage, result और rank calculate करने केलिए",
  tags: ["SUM","AVERAGE","IF","RANK","GRADE","RESULT","MARKS"],
  formulas: [
    {
      label: "Total Marks",
      code: "=SUM(E2:I2)",
      desc: "सभी subjects के marks जोड़ने केलिए"
    },
    {
      label: "Average Marks",
      code: "=AVERAGE(E2:I2)",
      desc: "Average marks calculate करनेकेलिए"
    },
    {
      label: "Maximum Marks",
      code: "=MAX(E2:I2)",
      desc: "Highest marks देखनेकेलिए"
    },
    {
      label: "Minimum Marks",
      code: "=MIN(E2:I2)",
      desc: "Lowest marks देखनेकेलिए"
    },
    {
      label: "Percentage",
      code: "=(J2/500)*100",
      desc: "Percentage calculate करनेकेलिए"
    },
    {
      label: "Pass / Fail",
      code: '=IF(K2>=35,"PASS","FAIL")',
      desc: "Pass या fail check करनेकेलिए"
    },
    {
      label: "Grade",
      code: '=IF(L2>=90,"A+",IF(L2>=75,"A",IF(L2>=60,"B",IF(L2>=40,"C","FAIL"))))',
      desc: "Grade calculate करनेकेलिए"
    },
    {
      label: "Student Rank",
      code: "=RANK(J2,$J$2:$J$100,0)",
      desc: "Class rank निकालनेकेलिए"
    },
    {
      label: "Attendance %",
      code: "=(M2/N2)*100",
      desc: "Attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Final Result",
      code: '=IF(AND(K2>=35,M2>=75),"PROMOTED","NOT PROMOTED")',
      desc: "Final result check करनेकेलिए"
    }
  ]
},

{
  id: 2,
  name: "STUDENT ATTENDANCE REPORT",
  icon: "🗓️",
  category: "Education",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "Student attendance, absent और present records manage करनेकेलिए",
  tags: ["COUNTIF","ATTENDANCE","PRESENT","ABSENT","PERCENTAGE"],
  formulas: [
    {
      label: "Total Present",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Present days count करनेकेलिए"
    },
    {
      label: "Total Absent",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent days count करनेकेलिए"
    },
    {
      label: "Late Attendance",
      code: '=COUNTIF(E2:E100,"LATE")',
      desc: "Late attendance count करनेकेलिए"
    },
    {
      label: "Attendance Percentage",
      code: '=(COUNTIF(E2:E100,"PRESENT")/COUNTA(E2:E100))*100',
      desc: "Attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Working Days",
      code: '=COUNTA(E2:E100)',
      desc: "Total working days count करनेकेलिए"
    },
    {
      label: "Monthly Attendance",
      code: '=SUM(F2:F31)',
      desc: "Monthly attendance total करनेकेलिए"
    },
    {
      label: "Attendance Status",
      code: '=IF(H2>=75,"GOOD","LOW")',
      desc: "Attendance status check करनेकेलिए"
    },
    {
      label: "Average Attendance",
      code: '=AVERAGE(F2:F31)',
      desc: "Average attendance निकालनेकेलिए"
    },
    {
      label: "Highest Attendance",
      code: '=MAX(F2:F31)',
      desc: "Highest attendance देखनेकेलिए"
    },
    {
      label: "Lowest Attendance",
      code: '=MIN(F2:F31)',
      desc: "Lowest attendance देखनेकेलिए"
    }
  ]
},

{
  id: 3,
  name: "CLASS WISE REPORT",
  icon: "🏫",
  category: "Education",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Class wise students, marks और performance track करनेकेलिए",
  tags: ["COUNTIF","CLASS","STUDENT","AVERAGE","RANK"],
  formulas: [
    {
      label: "Total Students",
      code: '=COUNTA(B2:B100)',
      desc: "Total students count करनेकेलिए"
    },
    {
      label: "Total Passed Students",
      code: '=COUNTIF(H2:H100,"PASS")',
      desc: "Passed students count करनेकेलिए"
    },
    {
      label: "Total Failed Students",
      code: '=COUNTIF(H2:H100,"FAIL")',
      desc: "Failed students count करनेकेलिए"
    },
    {
      label: "Pass Percentage",
      code: '=(COUNTIF(H2:H100,"PASS")/COUNTA(B2:B100))*100',
      desc: "Pass percentage calculate करनेकेलिए"
    },
    {
      label: "Class Average",
      code: '=AVERAGE(G2:G100)',
      desc: "Class average calculate करनेकेलिए"
    },
    {
      label: "Topper Marks",
      code: '=MAX(G2:G100)',
      desc: "Topper marks देखनेकेलिए"
    },
    {
      label: "Lowest Marks",
      code: '=MIN(G2:G100)',
      desc: "Lowest marks देखनेकेलिए"
    },
    {
      label: "Class Rank",
      code: '=RANK(G2,$G$2:$G$100,0)',
      desc: "Class rank calculate करनेकेलिए"
    },
    {
      label: "Attendance Average",
      code: '=AVERAGE(I2:I100)',
      desc: "Class attendance average calculate करनेकेलिए"
    },
    {
      label: "Class Performance",
      code: '=IF(E2>=75,"EXCELLENT","AVERAGE")',
      desc: "Class performance check करनेकेलिए"
    }
  ]
},

{
  id: 4,
  name: "SECTION WISE REPORT",
  icon: "📚",
  category: "Education",
  color: "#9c27b0",
  colorRgb: "rgba(156,39,176,0.25)",
  use: "Different sections की performance और attendance manage करनेकेलिए",
  tags: ["SECTION","COUNTIF","AVERAGE","REPORT","STUDENTS"],
  formulas: [
    {
      label: "Section A Students",
      code: '=COUNTIF(C2:C100,"A")',
      desc: "Section A students count करनेकेलिए"
    },
    {
      label: "Section B Students",
      code: '=COUNTIF(C2:C100,"B")',
      desc: "Section B students count करनेकेलिए"
    },
    {
      label: "Section C Students",
      code: '=COUNTIF(C2:C100,"C")',
      desc: "Section C students count करनेकेलिए"
    },
    {
      label: "Section Average",
      code: '=AVERAGE(F2:F100)',
      desc: "Section average calculate करनेकेलिए"
    },
    {
      label: "Section Pass %",
      code: '=(COUNTIF(G2:G100,"PASS")/COUNTA(B2:B100))*100',
      desc: "Section pass percentage calculate करनेकेलिए"
    },
    {
      label: "Section Topper",
      code: '=MAX(F2:F100)',
      desc: "Section topper marks देखनेकेलिए"
    },
    {
      label: "Section Lowest",
      code: '=MIN(F2:F100)',
      desc: "Section lowest marks देखनेकेलिए"
    },
    {
      label: "Section Attendance",
      code: '=AVERAGE(H2:H100)',
      desc: "Section attendance average calculate करनेकेलिए"
    },
    {
      label: "Section Rank",
      code: '=RANK(F2,$F$2:$F$100,0)',
      desc: "Section rank निकालनेकेलिए"
    },
    {
      label: "Performance Status",
      code: '=IF(F2>=80,"TOP","NORMAL")',
      desc: "Performance status check करनेकेलिए"
    }
  ]
},

{
  id: 5,
  name: "SUBJECT WISE REPORT",
  icon: "📖",
  category: "Education",
  color: "#f44336",
  colorRgb: "rgba(244,67,54,0.25)",
  use: "Subject wise marks, average और performance calculate करनेकेलिए",
  tags: ["SUBJECT","MARKS","AVERAGE","GRADE","RESULT"],
  formulas: [
    {
      label: "Math Total",
      code: '=SUM(E2:E100)',
      desc: "Math subject total marks calculate करनेकेलिए"
    },
    {
      label: "Science Total",
      code: '=SUM(F2:F100)',
      desc: "Science total marks calculate करनेकेलिए"
    },
    {
      label: "English Total",
      code: '=SUM(G2:G100)',
      desc: "English total marks calculate करनेकेलिए"
    },
    {
      label: "Subject Average",
      code: '=AVERAGE(E2:E100)',
      desc: "Subject average calculate करनेकेलिए"
    },
    {
      label: "Highest Subject Marks",
      code: '=MAX(E2:E100)',
      desc: "Highest subject marks देखनेकेलिए"
    },
    {
      label: "Lowest Subject Marks",
      code: '=MIN(E2:E100)',
      desc: "Lowest subject marks देखनेकेलिए"
    },
    {
      label: "Pass Students",
      code: '=COUNTIF(E2:E100,">=35")',
      desc: "Pass students count करनेकेलिए"
    },
    {
      label: "Fail Students",
      code: '=COUNTIF(E2:E100,"<35")',
      desc: "Fail students count करनेकेलिए"
    },
    {
      label: "Pass Percentage",
      code: '=(COUNTIF(E2:E100,">=35")/COUNTA(E2:E100))*100',
      desc: "Pass percentage calculate करनेकेलिए"
    },
    {
      label: "Subject Grade",
      code: '=IF(E2>=90,"A+",IF(E2>=75,"A",IF(E2>=60,"B","C")))',
      desc: "Subject grade calculate करनेकेलिए"
    }
  ]
},
{
  id: 6,
  name: "EXAM RESULT REPORT",
  icon: "📝",
  category: "Education",
  color: "#03a9f4",
  colorRgb: "rgba(3,169,244,0.25)",
  use: "Exam result, percentage, rank और grades manage करनेकेलिए",
  tags: ["RESULT","EXAM","RANK","GRADE","PERCENTAGE"],
  formulas: [
    {
      label: "Total Marks",
      code: "=SUM(E2:I2)",
      desc: "Exam total marks calculate करनेकेलिए"
    },
    {
      label: "Percentage",
      code: "=(J2/500)*100",
      desc: "Percentage calculate करनेकेलिए"
    },
    {
      label: "Result Status",
      code: '=IF(K2>=35,"PASS","FAIL")',
      desc: "Pass fail status check करनेकेलिए"
    },
    {
      label: "Grade",
      code: '=IF(L2>=90,"A+",IF(L2>=75,"A",IF(L2>=60,"B",IF(L2>=40,"C","FAIL"))))',
      desc: "Grade calculate करनेकेलिए"
    },
    {
      label: "Student Rank",
      code: '=RANK(J2,$J$2:$J$100,0)',
      desc: "Student rank calculate करनेकेलिए"
    },
    {
      label: "Highest Marks",
      code: '=MAX(J2:J100)',
      desc: "Highest marks देखनेकेलिए"
    },
    {
      label: "Lowest Marks",
      code: '=MIN(J2:J100)',
      desc: "Lowest marks देखनेकेलिए"
    },
    {
      label: "Average Marks",
      code: '=AVERAGE(J2:J100)',
      desc: "Average marks calculate करनेकेलिए"
    },
    {
      label: "Pass Percentage",
      code: '=(COUNTIF(K2:K100,"PASS")/COUNTA(B2:B100))*100',
      desc: "Pass percentage calculate करनेकेलिए"
    },
    {
      label: "Exam Performance",
      code: '=IF(L2>=75,"EXCELLENT","AVERAGE")',
      desc: "Exam performance check करनेकेलिए"
    }
  ]
},
{
  id: 7,
  name: "TOPPER LIST REPORT",
  icon: "🥇",
  category: "Education",
  color: "#ffc107",
  colorRgb: "rgba(255,193,7,0.25)",
  use: "Topper students list और ranking manage करनेकेलिए",
  tags: ["TOPPER","RANK","MARKS","STUDENTS","RESULT"],
  formulas: [
    {
      label: "Topper Marks",
      code: '=MAX(H2:H100)',
      desc: "Highest topper marks देखनेकेलिए"
    },
    {
      label: "Topper Name",
      code: '=INDEX(B2:B100,MATCH(MAX(H2:H100),H2:H100,0))',
      desc: "Topper student name निकालनेकेलिए"
    },
    {
      label: "Top 3 Students",
      code: '=LARGE(H2:H100,3)',
      desc: "Top 3 marks निकालनेकेलिए"
    },
    {
      label: "Top 5 Students",
      code: '=LARGE(H2:H100,5)',
      desc: "Top 5 marks निकालनेकेलिए"
    },
    {
      label: "Average Topper Marks",
      code: '=AVERAGE(H2:H10)',
      desc: "Topper average marks calculate करनेकेलिए"
    },
    {
      label: "Rank Formula",
      code: '=RANK(H2,$H$2:$H$100,0)',
      desc: "Student rank calculate करनेकेलिए"
    },
    {
      label: "Topper Percentage",
      code: '=(MAX(H2:H100)/500)*100',
      desc: "Topper percentage calculate करनेकेलिए"
    },
    {
      label: "Gold Medal Status",
      code: '=IF(H2>=95,"YES","NO")',
      desc: "Gold medal eligibility check करनेकेलिए"
    },
    {
      label: "Highest Attendance",
      code: '=MAX(I2:I100)',
      desc: "Highest attendance देखनेकेलिए"
    },
    {
      label: "Topper Grade",
      code: '=IF(H2>=90,"A+",IF(H2>=75,"A","B"))',
      desc: "Topper grade calculate करनेकेलिए"
    }
  ]
},

{
  id: 8,
  name: "FAIL STUDENT REPORT",
  icon: "❌",
  category: "Education",
  color: "#e91e63",
  colorRgb: "rgba(233,30,99,0.25)",
  use: "Fail students और low performance track करनेकेलिए",
  tags: ["FAIL","STUDENT","MARKS","RESULT","LOW"],
  formulas: [
    {
      label: "Fail Students Count",
      code: '=COUNTIF(H2:H100,"FAIL")',
      desc: "Fail students count करनेकेलिए"
    },
    {
      label: "Failed Subject Count",
      code: '=COUNTIF(E2:I2,"<35")',
      desc: "Failed subjects count करनेकेलिए"
    },
    {
      label: "Lowest Marks",
      code: '=MIN(E2:I100)',
      desc: "Lowest marks देखनेकेलिए"
    },
    {
      label: "Fail Percentage",
      code: '=(COUNTIF(H2:H100,"FAIL")/COUNTA(B2:B100))*100',
      desc: "Fail percentage calculate करनेकेलिए"
    },
    {
      label: "Low Attendance",
      code: '=COUNTIF(J2:J100,"<75")',
      desc: "Low attendance students count करनेकेलिए"
    },
    {
      label: "Improvement Required",
      code: '=IF(H2="FAIL","YES","NO")',
      desc: "Improvement requirement check करनेकेलिए"
    },
    {
      label: "Retest Eligible",
      code: '=IF(E2<35,"RETEST","PASS")',
      desc: "Retest eligibility check करनेकेलिए"
    },
    {
      label: "Weak Subject",
      code: '=MIN(E2:I2)',
      desc: "Weak subject marks देखनेकेलिए"
    },
    {
      label: "Attendance Warning",
      code: '=IF(J2<75,"WARNING","GOOD")',
      desc: "Attendance warning check करनेकेलिए"
    },
    {
      label: "Performance Status",
      code: '=IF(H2="FAIL","LOW","GOOD")',
      desc: "Performance status check करनेकेलिए"
    }
  ]
},

{
  id: 9,
  name: "PASS PERCENTAGE REPORT",
  icon: "📊",
  category: "Education",
  color: "#8bc34a",
  colorRgb: "rgba(139,195,74,0.25)",
  use: "School और class pass percentage calculate करनेकेलिए",
  tags: ["PASS","PERCENTAGE","RESULT","CLASS","REPORT"],
  formulas: [
    {
      label: "Total Students",
      code: '=COUNTA(B2:B100)',
      desc: "Total students count करनेकेलिए"
    },
    {
      label: "Passed Students",
      code: '=COUNTIF(H2:H100,"PASS")',
      desc: "Passed students count करनेकेलिए"
    },
    {
      label: "Failed Students",
      code: '=COUNTIF(H2:H100,"FAIL")',
      desc: "Failed students count करनेकेलिए"
    },
    {
      label: "Pass Percentage",
      code: '=(COUNTIF(H2:H100,"PASS")/COUNTA(B2:B100))*100',
      desc: "Pass percentage calculate करनेकेलिए"
    },
    {
      label: "Fail Percentage",
      code: '=(COUNTIF(H2:H100,"FAIL")/COUNTA(B2:B100))*100',
      desc: "Fail percentage calculate करनेकेलिए"
    },
    {
      label: "Class Average",
      code: '=AVERAGE(G2:G100)',
      desc: "Class average calculate करनेकेलिए"
    },
    {
      label: "School Performance",
      code: '=IF(I2>=90,"EXCELLENT","GOOD")',
      desc: "School performance check करनेकेलिए"
    },
    {
      label: "Highest Pass Rate",
      code: '=MAX(I2:I100)',
      desc: "Highest pass rate देखनेकेलिए"
    },
    {
      label: "Lowest Pass Rate",
      code: '=MIN(I2:I100)',
      desc: "Lowest pass rate देखनेकेलिए"
    },
    {
      label: "Result Summary",
      code: '=IF(I2>=75,"SUCCESS","IMPROVE")',
      desc: "Result summary check करनेकेलिए"
    }
  ]
},

{
  id: 10,
  name: "FEE COLLECTION REPORT",
  icon: "💰",
  category: "Education",
  color: "#009688",
  colorRgb: "rgba(0,150,136,0.25)",
  use: "School fees collection और pending fees manage करनेकेलिए",
  tags: ["FEE","COLLECTION","PAYMENT","PENDING","STUDENTS"],
  formulas: [
    {
      label: "Total Fees",
      code: '=SUM(E2:E100)',
      desc: "Total fees calculate करनेकेलिए"
    },
    {
      label: "Collected Fees",
      code: '=SUM(F2:F100)',
      desc: "Collected fees calculate करनेकेलिए"
    },
    {
      label: "Pending Fees",
      code: '=SUM(G2:G100)',
      desc: "Pending fees calculate करनेकेलिए"
    },
    {
      label: "Paid Students",
      code: '=COUNTIF(H2:H100,"PAID")',
      desc: "Paid students count करनेकेलिए"
    },
    {
      label: "Unpaid Students",
      code: '=COUNTIF(H2:H100,"UNPAID")',
      desc: "Unpaid students count करनेकेलिए"
    },
    {
      label: "Collection Percentage",
      code: '=(SUM(F2:F100)/SUM(E2:E100))*100',
      desc: "Fee collection percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Fee",
      code: '=MAX(E2:E100)',
      desc: "Highest fee amount देखनेकेलिए"
    },
    {
      label: "Lowest Fee",
      code: '=MIN(E2:E100)',
      desc: "Lowest fee amount देखनेकेलिए"
    },
    {
      label: "Average Fee",
      code: '=AVERAGE(E2:E100)',
      desc: "Average fee calculate करनेकेलिए"
    },
    {
      label: "Fee Status",
      code: '=IF(G2=0,"CLEAR","PENDING")',
      desc: "Fee status check करनेकेलिए"
    }
  ]
},
{
  id: 11,
  name: "PENDING FEE REPORT",
  icon: "💳",
  category: "Education",
  color: "#ff5722",
  colorRgb: "rgba(255,87,34,0.25)",
  use: "Pending fees और unpaid students track करनेकेलिए",
  tags: ["FEE","PENDING","UNPAID","PAYMENT","STUDENTS"],
  formulas: [
    {
      label: "Total Pending Fees",
      code: '=SUM(G2:G100)',
      desc: "Total pending fees calculate करनेकेलिए"
    },
    {
      label: "Pending Students",
      code: '=COUNTIF(H2:H100,"PENDING")',
      desc: "Pending students count करनेकेलिए"
    },
    {
      label: "Paid Students",
      code: '=COUNTIF(H2:H100,"PAID")',
      desc: "Paid students count करनेकेलिए"
    },
    {
      label: "Highest Pending Fee",
      code: '=MAX(G2:G100)',
      desc: "Highest pending fee देखनेकेलिए"
    },
    {
      label: "Lowest Pending Fee",
      code: '=MIN(G2:G100)',
      desc: "Lowest pending fee देखनेकेलिए"
    },
    {
      label: "Average Pending Fee",
      code: '=AVERAGE(G2:G100)',
      desc: "Average pending fee calculate करनेकेलिए"
    },
    {
      label: "Pending Percentage",
      code: '=(COUNTIF(H2:H100,"PENDING")/COUNTA(B2:B100))*100',
      desc: "Pending percentage calculate करनेकेलिए"
    },
    {
      label: "Late Fee Charge",
      code: '=IF(G2>0,G2*5%,0)',
      desc: "Late fee charge calculate करनेकेलिए"
    },
    {
      label: "Final Amount",
      code: '=G2+I2',
      desc: "Final fee amount calculate करनेकेलिए"
    },
    {
      label: "Fee Alert",
      code: '=IF(G2>5000,"HIGH","NORMAL")',
      desc: "Fee alert status check करनेकेलिए"
    }
  ]
},
{
  id: 12,
  name: "MONTHLY FEE REPORT",
  icon: "📅",
  category: "Education",
  color: "#3f51b5",
  colorRgb: "rgba(63,81,181,0.25)",
  use: "Monthly fees collection और payment records manage करनेकेलिए",
  tags: ["MONTHLY","FEE","PAYMENT","COLLECTION","REPORT"],
  formulas: [
    {
      label: "January Fees",
      code: '=SUM(E2:E100)',
      desc: "January fees calculate करनेकेलिए"
    },
    {
      label: "February Fees",
      code: '=SUM(F2:F100)',
      desc: "February fees calculate करनेकेलिए"
    },
    {
      label: "March Fees",
      code: '=SUM(G2:G100)',
      desc: "March fees calculate करनेकेलिए"
    },
    {
      label: "Quarterly Fees",
      code: '=SUM(E2:G100)',
      desc: "Quarterly fees calculate करनेकेलिए"
    },
    {
      label: "Average Monthly Fee",
      code: '=AVERAGE(E2:G100)',
      desc: "Average monthly fees calculate करनेकेलिए"
    },
    {
      label: "Highest Month Collection",
      code: '=MAX(E2:G100)',
      desc: "Highest monthly collection देखनेकेलिए"
    },
    {
      label: "Lowest Month Collection",
      code: '=MIN(E2:G100)',
      desc: "Lowest monthly collection देखनेकेलिए"
    },
    {
      label: "Monthly Pending",
      code: '=SUM(H2:H100)',
      desc: "Monthly pending fees calculate करनेकेलिए"
    },
    {
      label: "Collection Rate",
      code: '=(SUM(E2:G100)/(SUM(E2:G100)+SUM(H2:H100)))*100',
      desc: "Collection rate calculate करनेकेलिए"
    },
    {
      label: "Monthly Status",
      code: '=IF(I2>=90,"GOOD","LOW")',
      desc: "Monthly status check करनेकेलिए"
    }
  ]
},
{
  id: 13,
  name: "TEACHER REPORT",
  icon: "👨‍🏫",
  category: "Education",
  color: "#795548",
  colorRgb: "rgba(121,85,72,0.25)",
  use: "Teachers attendance, performance और subjects manage करनेकेलिए",
  tags: ["TEACHER","ATTENDANCE","SUBJECT","PERFORMANCE","STAFF"],
  formulas: [
    {
      label: "Total Teachers",
      code: '=COUNTA(B2:B100)',
      desc: "Total teachers count करनेकेलिए"
    },
    {
      label: "Present Teachers",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Present teachers count करनेकेलिए"
    },
    {
      label: "Absent Teachers",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent teachers count करनेकेलिए"
    },
    {
      label: "Teacher Attendance %",
      code: '=(COUNTIF(E2:E100,"PRESENT")/COUNTA(B2:B100))*100',
      desc: "Teacher attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Average Classes",
      code: '=AVERAGE(F2:F100)',
      desc: "Average classes calculate करनेकेलिए"
    },
    {
      label: "Highest Classes",
      code: '=MAX(F2:F100)',
      desc: "Highest classes देखनेकेलिए"
    },
    {
      label: "Lowest Classes",
      code: '=MIN(F2:F100)',
      desc: "Lowest classes देखनेकेलिए"
    },
    {
      label: "Performance Score",
      code: '=AVERAGE(G2:G100)',
      desc: "Teacher performance score calculate करनेकेलिए"
    },
    {
      label: "Teacher Rank",
      code: '=RANK(G2,$G$2:$G$100,0)',
      desc: "Teacher rank calculate करनेकेलिए"
    },
    {
      label: "Teacher Status",
      code: '=IF(G2>=80,"EXCELLENT","AVERAGE")',
      desc: "Teacher status check करनेकेलिए"
    }
  ]
},
{
  id: 14,
  name: "STAFF SALARY REPORT",
  icon: "💵",
  category: "Education",
  color: "#607d8b",
  colorRgb: "rgba(96,125,139,0.25)",
  use: "School staff salary और payment records manage करनेकेलिए",
  tags: ["STAFF","SALARY","PAYMENT","BONUS","DEDUCTION"],
  formulas: [
    {
      label: "Basic Salary",
      code: '=SUM(E2:E100)',
      desc: "Basic salary calculate करनेकेलिए"
    },
    {
      label: "Bonus Amount",
      code: '=SUM(F2:F100)',
      desc: "Bonus amount calculate करनेकेलिए"
    },
    {
      label: "Deduction Amount",
      code: '=SUM(G2:G100)',
      desc: "Deduction amount calculate करनेकेलिए"
    },
    {
      label: "Net Salary",
      code: '=E2+F2-G2',
      desc: "Net salary calculate करनेकेलिए"
    },
    {
      label: "Highest Salary",
      code: '=MAX(H2:H100)',
      desc: "Highest salary देखनेकेलिए"
    },
    {
      label: "Lowest Salary",
      code: '=MIN(H2:H100)',
      desc: "Lowest salary देखनेकेलिए"
    },
    {
      label: "Average Salary",
      code: '=AVERAGE(H2:H100)',
      desc: "Average salary calculate करनेकेलिए"
    },
    {
      label: "Paid Staff",
      code: '=COUNTIF(I2:I100,"PAID")',
      desc: "Paid staff count करनेकेलिए"
    },
    {
      label: "Unpaid Staff",
      code: '=COUNTIF(I2:I100,"UNPAID")',
      desc: "Unpaid staff count करनेकेलिए"
    },
    {
      label: "Salary Status",
      code: '=IF(H2>=50000,"HIGH","NORMAL")',
      desc: "Salary status check करनेकेलिए"
    }
  ]
},
{
  id: 15,
  name: "TIME TABLE REPORT",
  icon: "⏰",
  category: "Education",
  color: "#9e9e9e",
  colorRgb: "rgba(158,158,158,0.25)",
  use: "School class timing और subjects schedule manage करनेकेलिए",
  tags: ["TIME","TABLE","SCHEDULE","CLASS","SUBJECT"],
  formulas: [
    {
      label: "Total Classes",
      code: '=COUNTA(B2:B100)',
      desc: "Total classes count करनेकेलिए"
    },
    {
      label: "Morning Classes",
      code: '=COUNTIF(E2:E100,"MORNING")',
      desc: "Morning classes count करनेकेलिए"
    },
    {
      label: "Evening Classes",
      code: '=COUNTIF(E2:E100,"EVENING")',
      desc: "Evening classes count करनेकेलिए"
    },
    {
      label: "Total Subjects",
      code: '=COUNTA(C2:C100)',
      desc: "Total subjects count करनेकेलिए"
    },
    {
      label: "Teacher Allocation",
      code: '=COUNTA(D2:D100)',
      desc: "Teacher allocation calculate करनेकेलिए"
    },
    {
      label: "Weekly Classes",
      code: '=SUM(F2:F100)',
      desc: "Weekly classes calculate करनेकेलिए"
    },
    {
      label: "Average Classes",
      code: '=AVERAGE(F2:F100)',
      desc: "Average classes calculate करनेकेलिए"
    },
    {
      label: "Class Duration",
      code: '=G2-F2',
      desc: "Class duration calculate करनेकेलिए"
    },
    {
      label: "Schedule Status",
      code: '=IF(F2>=6,"FULL","AVAILABLE")',
      desc: "Schedule status check करनेकेलिए"
    },
    {
      label: "Subject Load",
      code: '=COUNTIF(C2:C100,C2)',
      desc: "Subject load count करनेकेलिए"
    }
  ]
},
{
  id: 16,
  name: "HOMEWORK REPORT",
  icon: "📚",
  category: "Education",
  color: "#673ab7",
  colorRgb: "rgba(103,58,183,0.25)",
  use: "Students homework status और submission track करनेकेलिए",
  tags: ["HOMEWORK","SUBMISSION","STUDENT","STATUS","CLASS"],
  formulas: [
    {
      label: "Total Homework",
      code: '=COUNTA(E2:E100)',
      desc: "Total homework count करनेकेलिए"
    },
    {
      label: "Completed Homework",
      code: '=COUNTIF(F2:F100,"COMPLETED")',
      desc: "Completed homework count करनेकेलिए"
    },
    {
      label: "Pending Homework",
      code: '=COUNTIF(F2:F100,"PENDING")',
      desc: "Pending homework count करनेकेलिए"
    },
    {
      label: "Homework Percentage",
      code: '=(COUNTIF(F2:F100,"COMPLETED")/COUNTA(E2:E100))*100',
      desc: "Homework completion percentage calculate करनेकेलिए"
    },
    {
      label: "Late Submission",
      code: '=COUNTIF(F2:F100,"LATE")',
      desc: "Late homework count करनेकेलिए"
    },
    {
      label: "Highest Homework Score",
      code: '=MAX(G2:G100)',
      desc: "Highest homework marks देखनेकेलिए"
    },
    {
      label: "Lowest Homework Score",
      code: '=MIN(G2:G100)',
      desc: "Lowest homework marks देखनेकेलिए"
    },
    {
      label: "Average Homework Score",
      code: '=AVERAGE(G2:G100)',
      desc: "Average homework score calculate करनेकेलिए"
    },
    {
      label: "Homework Rank",
      code: '=RANK(G2,$G$2:$G$100,0)',
      desc: "Homework rank calculate करनेकेलिए"
    },
    {
      label: "Homework Status",
      code: '=IF(G2>=80,"GOOD","IMPROVE")',
      desc: "Homework performance check करनेकेलिए"
    }
  ]
},

{
  id: 17,
  name: "ADMISSION REPORT",
  icon: "📝",
  category: "Education",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Student admissions और records manage करनेकेलिए",
  tags: ["ADMISSION","STUDENT","NEW","RECORD","CLASS"],
  formulas: [
    {
      label: "Total Admissions",
      code: '=COUNTA(B2:B100)',
      desc: "Total admissions count करनेकेलिए"
    },
    {
      label: "Male Students",
      code: '=COUNTIF(E2:E100,"MALE")',
      desc: "Male students count करनेकेलिए"
    },
    {
      label: "Female Students",
      code: '=COUNTIF(E2:E100,"FEMALE")',
      desc: "Female students count करनेकेलिए"
    },
    {
      label: "Admission Fees",
      code: '=SUM(F2:F100)',
      desc: "Admission fees calculate करनेकेलिए"
    },
    {
      label: "Pending Admissions",
      code: '=COUNTIF(G2:G100,"PENDING")',
      desc: "Pending admissions count करनेकेलिए"
    },
    {
      label: "Approved Admissions",
      code: '=COUNTIF(G2:G100,"APPROVED")',
      desc: "Approved admissions count करनेकेलिए"
    },
    {
      label: "Rejected Admissions",
      code: '=COUNTIF(G2:G100,"REJECTED")',
      desc: "Rejected admissions count करनेकेलिए"
    },
    {
      label: "Average Fees",
      code: '=AVERAGE(F2:F100)',
      desc: "Average admission fees calculate करनेकेलिए"
    },
    {
      label: "Highest Fees",
      code: '=MAX(F2:F100)',
      desc: "Highest fees देखनेकेलिए"
    },
    {
      label: "Admission Status",
      code: '=IF(G2="APPROVED","ACTIVE","WAITING")',
      desc: "Admission status check करनेकेलिए"
    }
  ]
},

{
  id: 18,
  name: "NEW ADMISSION REPORT",
  icon: "🆕",
  category: "Education",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "New students admissions और enrollment manage करनेकेलिए",
  tags: ["NEW","ADMISSION","ENROLLMENT","STUDENTS","REPORT"],
  formulas: [
    {
      label: "New Admissions",
      code: '=COUNTIF(H2:H100,"NEW")',
      desc: "New admissions count करनेकेलिए"
    },
    {
      label: "Monthly Admissions",
      code: '=SUM(I2:I100)',
      desc: "Monthly admissions calculate करनेकेलिए"
    },
    {
      label: "Class Wise Admissions",
      code: '=COUNTIF(C2:C100,"10TH")',
      desc: "Class wise admissions count करनेकेलिए"
    },
    {
      label: "Admission Fees",
      code: '=SUM(F2:F100)',
      desc: "New admission fees calculate करनेकेलिए"
    },
    {
      label: "Average Admissions",
      code: '=AVERAGE(I2:I100)',
      desc: "Average admissions calculate करनेकेलिए"
    },
    {
      label: "Highest Admissions",
      code: '=MAX(I2:I100)',
      desc: "Highest admissions देखनेकेलिए"
    },
    {
      label: "Lowest Admissions",
      code: '=MIN(I2:I100)',
      desc: "Lowest admissions seeing करनेकेलिए"
    },
    {
      label: "Admission Growth %",
      code: '=((I3-I2)/I2)*100',
      desc: "Admission growth percentage calculate करनेकेलिए"
    },
    {
      label: "Admission Status",
      code: '=IF(I2>=50,"HIGH","NORMAL")',
      desc: "Admission status check करनेकेलिए"
    },
    {
      label: "Section Allocation",
      code: '=COUNTIF(D2:D100,"A")',
      desc: "Section allocation count करनेकेलिए"
    }
  ]
},

{
  id: 19,
  name: "STUDENT ID CARD REPORT",
  icon: "🪪",
  category: "Education",
  color: "#e91e63",
  colorRgb: "rgba(233,30,99,0.25)",
  use: "Student ID cards और identity records manage करनेकेलिए",
  tags: ["ID","CARD","STUDENT","IDENTITY","RECORD"],
  formulas: [
    {
      label: "Generated ID Cards",
      code: '=COUNTIF(E2:E100,"GENERATED")',
      desc: "Generated ID cards count करनेकेलिए"
    },
    {
      label: "Pending ID Cards",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending ID cards count करनेकेलिए"
    },
    {
      label: "Printed Cards",
      code: '=COUNTIF(E2:E100,"PRINTED")',
      desc: "Printed cards count करनेकेलिए"
    },
    {
      label: "Duplicate Cards",
      code: '=COUNTIF(F2:F100,"DUPLICATE")',
      desc: "Duplicate cards count करनेकेलिए"
    },
    {
      label: "Total Students",
      code: '=COUNTA(B2:B100)',
      desc: "Total students count करनेकेलिए"
    },
    {
      label: "ID Completion %",
      code: '=(COUNTIF(E2:E100,"GENERATED")/COUNTA(B2:B100))*100',
      desc: "ID completion percentage calculate करनेकेलिए"
    },
    {
      label: "Card Fees",
      code: '=SUM(G2:G100)',
      desc: "Card fees calculate करनेकेलिए"
    },
    {
      label: "Average Fees",
      code: '=AVERAGE(G2:G100)',
      desc: "Average card fees calculate करनेकेलिए"
    },
    {
      label: "Highest Fees",
      code: '=MAX(G2:G100)',
      desc: "Highest card fees देखनेकेलिए"
    },
    {
      label: "Card Status",
      code: '=IF(E2="GENERATED","ACTIVE","PENDING")',
      desc: "Card status check करनेकेलिए"
    }
  ]
},

{
  id: 20,
  name: "LIBRARY REPORT",
  icon: "📖",
  category: "Education",
  color: "#009688",
  colorRgb: "rgba(0,150,136,0.25)",
  use: "Library books issue, return और fines manage करनेकेलिए",
  tags: ["LIBRARY","BOOK","ISSUE","RETURN","FINE"],
  formulas: [
    {
      label: "Total Books",
      code: '=COUNTA(B2:B100)',
      desc: "Total books count करनेकेलिए"
    },
    {
      label: "Issued Books",
      code: '=COUNTIF(E2:E100,"ISSUED")',
      desc: "Issued books count करनेकेलिए"
    },
    {
      label: "Returned Books",
      code: '=COUNTIF(E2:E100,"RETURNED")',
      desc: "Returned books count करनेकेलिए"
    },
    {
      label: "Pending Returns",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending returns count करनेकेलिए"
    },
    {
      label: "Library Fine",
      code: '=SUM(F2:F100)',
      desc: "Total fine calculate करनेकेलिए"
    },
    {
      label: "Average Fine",
      code: '=AVERAGE(F2:F100)',
      desc: "Average fine calculate करनेकेलिए"
    },
    {
      label: "Most Issued Book",
      code: '=MAX(G2:G100)',
      desc: "Most issued book count देखनेकेलिए"
    },
    {
      label: "Available Books",
      code: '=COUNTIF(E2:E100,"AVAILABLE")',
      desc: "Available books count करनेकेलिए"
    },
    {
      label: "Issue Percentage",
      code: '=(COUNTIF(E2:E100,"ISSUED")/COUNTA(B2:B100))*100',
      desc: "Book issue percentage calculate करनेकेलिए"
    },
    {
      label: "Library Status",
      code: '=IF(F2>500,"OVERDUE","NORMAL")',
      desc: "Library fine status check करनेकेलिए"
    }
  ]
},  
{
  id: 21,
  name: "TRANSPORT REPORT",
  icon: "🚌",
  category: "Education",
  color: "#2196f3",
  colorRgb: "rgba(33,150,243,0.25)",
  use: "School transport, bus fees और routes manage करनेकेलिए",
  tags: ["TRANSPORT","BUS","ROUTE","FEE","STUDENT"],
  formulas: [
    {
      label: "Total Transport Students",
      code: '=COUNTA(B2:B100)',
      desc: "Transport students count करनेकेलिए"
    },
    {
      label: "Bus Fees Collected",
      code: '=SUM(E2:E100)',
      desc: "Bus fees calculate करनेकेलिए"
    },
    {
      label: "Pending Bus Fees",
      code: '=SUM(F2:F100)',
      desc: "Pending transport fees calculate करनेकेलिए"
    },
    {
      label: "Assigned Routes",
      code: '=COUNTIF(G2:G100,"ASSIGNED")',
      desc: "Assigned routes count करनेकेलिए"
    },
    {
      label: "Unassigned Routes",
      code: '=COUNTIF(G2:G100,"PENDING")',
      desc: "Pending routes count करनेकेलिए"
    },
    {
      label: "Transport Attendance",
      code: '=AVERAGE(H2:H100)',
      desc: "Transport attendance calculate करनेकेलिए"
    },
    {
      label: "Highest Route Fee",
      code: '=MAX(E2:E100)',
      desc: "Highest route fee देखनेकेलिए"
    },
    {
      label: "Lowest Route Fee",
      code: '=MIN(E2:E100)',
      desc: "Lowest route fee देखनेकेलिए"
    },
    {
      label: "Average Transport Fee",
      code: '=AVERAGE(E2:E100)',
      desc: "Average transport fee calculate करनेकेलिए"
    },
    {
      label: "Transport Status",
      code: '=IF(F2=0,"CLEAR","PENDING")',
      desc: "Transport fee status check करनेकेलिए"
    }
  ]
},

{
  id: 22,
  name: "BUS ROUTE REPORT",
  icon: "🚍",
  category: "Education",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Bus routes, students और timing manage करनेकेलिए",
  tags: ["BUS","ROUTE","TIMING","TRANSPORT","LOCATION"],
  formulas: [
    {
      label: "Total Routes",
      code: '=COUNTA(B2:B100)',
      desc: "Total routes count करनेकेलिए"
    },
    {
      label: "Active Routes",
      code: '=COUNTIF(E2:E100,"ACTIVE")',
      desc: "Active routes count करनेकेलिए"
    },
    {
      label: "Inactive Routes",
      code: '=COUNTIF(E2:E100,"INACTIVE")',
      desc: "Inactive routes count करनेकेलिए"
    },
    {
      label: "Students Per Route",
      code: '=COUNTIF(C2:C100,C2)',
      desc: "Route wise students count करनेकेलिए"
    },
    {
      label: "Average Distance",
      code: '=AVERAGE(F2:F100)',
      desc: "Average distance calculate करनेकेलिए"
    },
    {
      label: "Longest Route",
      code: '=MAX(F2:F100)',
      desc: "Longest route distance देखनेकेलिए"
    },
    {
      label: "Shortest Route",
      code: '=MIN(F2:F100)',
      desc: "Shortest route distance देखनेकेलिए"
    },
    {
      label: "Route Timing",
      code: '=G2-H2',
      desc: "Route timing calculate करनेकेलिए"
    },
    {
      label: "Bus Capacity %",
      code: '=(I2/J2)*100',
      desc: "Bus capacity percentage calculate करनेकेलिए"
    },
    {
      label: "Route Status",
      code: '=IF(I2>=90,"FULL","AVAILABLE")',
      desc: "Route status check करनेकेलिए"
    }
  ]
},

{
  id: 23,
  name: "HOSTEL REPORT",
  icon: "🏠",
  category: "Education",
  color: "#795548",
  colorRgb: "rgba(121,85,72,0.25)",
  use: "Hostel rooms, fees और student records manage करनेकेलिए",
  tags: ["HOSTEL","ROOM","FEE","STUDENT","BED"],
  formulas: [
    {
      label: "Total Hostel Students",
      code: '=COUNTA(B2:B100)',
      desc: "Hostel students count करनेकेलिए"
    },
    {
      label: "Occupied Rooms",
      code: '=COUNTIF(E2:E100,"OCCUPIED")',
      desc: "Occupied rooms count करनेकेलिए"
    },
    {
      label: "Vacant Rooms",
      code: '=COUNTIF(E2:E100,"VACANT")',
      desc: "Vacant rooms count करनेकेलिए"
    },
    {
      label: "Hostel Fees",
      code: '=SUM(F2:F100)',
      desc: "Hostel fees calculate करनेकेलिए"
    },
    {
      label: "Pending Hostel Fees",
      code: '=SUM(G2:G100)',
      desc: "Pending hostel fees calculate करनेकेलिए"
    },
    {
      label: "Mess Charges",
      code: '=SUM(H2:H100)',
      desc: "Mess charges calculate करनेकेलिए"
    },
    {
      label: "Average Hostel Fee",
      code: '=AVERAGE(F2:F100)',
      desc: "Average hostel fee calculate करनेकेलिए"
    },
    {
      label: "Highest Hostel Fee",
      code: '=MAX(F2:F100)',
      desc: "Highest hostel fee देखनेकेलिए"
    },
    {
      label: "Room Capacity %",
      code: '=(COUNTIF(E2:E100,"OCCUPIED")/COUNTA(B2:B100))*100',
      desc: "Room occupancy percentage calculate करनेकेलिए"
    },
    {
      label: "Hostel Status",
      code: '=IF(G2=0,"PAID","PENDING")',
      desc: "Hostel fee status check करनेकेलिए"
    }
  ]
},

{
  id: 24,
  name: "SCHOLARSHIP REPORT",
  icon: "🎓",
  category: "Education",
  color: "#9c27b0",
  colorRgb: "rgba(156,39,176,0.25)",
  use: "Scholarship students और amount manage करनेकेलिए",
  tags: ["SCHOLARSHIP","STUDENT","AMOUNT","MERIT","STATUS"],
  formulas: [
    {
      label: "Total Scholarship Students",
      code: '=COUNTIF(E2:E100,"YES")',
      desc: "Scholarship students count करनेकेलिए"
    },
    {
      label: "Scholarship Amount",
      code: '=SUM(F2:F100)',
      desc: "Scholarship amount calculate करनेकेलिए"
    },
    {
      label: "Highest Scholarship",
      code: '=MAX(F2:F100)',
      desc: "Highest scholarship amount देखनेकेलिए"
    },
    {
      label: "Lowest Scholarship",
      code: '=MIN(F2:F100)',
      desc: "Lowest scholarship amount देखनेकेलिए"
    },
    {
      label: "Average Scholarship",
      code: '=AVERAGE(F2:F100)',
      desc: "Average scholarship amount calculate करनेकेलिए"
    },
    {
      label: "Merit Students",
      code: '=COUNTIF(G2:G100,"MERIT")',
      desc: "Merit students count करनेकेलिए"
    },
    {
      label: "Sports Scholarship",
      code: '=COUNTIF(G2:G100,"SPORTS")',
      desc: "Sports scholarship students count करनेकेलिए"
    },
    {
      label: "Scholarship Percentage",
      code: '=(COUNTIF(E2:E100,"YES")/COUNTA(B2:B100))*100',
      desc: "Scholarship percentage calculate करनेकेलिए"
    },
    {
      label: "Eligibility Status",
      code: '=IF(H2>=75,"ELIGIBLE","NOT ELIGIBLE")',
      desc: "Scholarship eligibility check करनेकेलिए"
    },
    {
      label: "Scholarship Status",
      code: '=IF(F2>=5000,"APPROVED","PENDING")',
      desc: "Scholarship approval check करनेकेलिए"
    }
  ]
},

{
  id: 25,
  name: "DISCIPLINE REPORT",
  icon: "⚖️",
  category: "Education",
  color: "#f44336",
  colorRgb: "rgba(244,67,54,0.25)",
  use: "Student discipline, warning और behavior records manage करनेकेलिए",
  tags: ["DISCIPLINE","WARNING","BEHAVIOR","STUDENT","RULE"],
  formulas: [
    {
      label: "Total Complaints",
      code: '=COUNTA(E2:E100)',
      desc: "Total complaints count करनेकेलिए"
    },
    {
      label: "Warning Students",
      code: '=COUNTIF(F2:F100,"WARNING")',
      desc: "Warning students count करनेकेलिए"
    },
    {
      label: "Suspended Students",
      code: '=COUNTIF(F2:F100,"SUSPENDED")',
      desc: "Suspended students count करनेकेलिए"
    },
    {
      label: "Good Behavior Students",
      code: '=COUNTIF(F2:F100,"GOOD")',
      desc: "Good behavior students count करनेकेलिए"
    },
    {
      label: "Behavior Score",
      code: '=AVERAGE(G2:G100)',
      desc: "Behavior score calculate करनेकेलिए"
    },
    {
      label: "Highest Discipline Score",
      code: '=MAX(G2:G100)',
      desc: "Highest discipline score देखनेकेलिए"
    },
    {
      label: "Lowest Discipline Score",
      code: '=MIN(G2:G100)',
      desc: "Lowest discipline score देखनेकेलिए"
    },
    {
      label: "Discipline Percentage",
      code: '=(COUNTIF(F2:F100,"GOOD")/COUNTA(B2:B100))*100',
      desc: "Discipline percentage calculate करनेकेलिए"
    },
    {
      label: "Penalty Amount",
      code: '=SUM(H2:H100)',
      desc: "Penalty amount calculate करनेकेलिए"
    },
    {
      label: "Discipline Status",
      code: '=IF(G2>=80,"GOOD","IMPROVE")',
      desc: "Discipline status check करनेकेलिए"
    }
  ]
},
{
  id: 26,
  name: "PARENT MEETING REPORT",
  icon: "👨‍👩‍👧",
  category: "Education",
  color: "#00bcd4",
  colorRgb: "rgba(0,188,212,0.25)",
  use: "Parent meetings, attendance और feedback manage करनेकेलिए",
  tags: ["PARENT","MEETING","FEEDBACK","ATTENDANCE","STUDENT"],
  formulas: [
    {
      label: "Total Meetings",
      code: '=COUNTA(B2:B100)',
      desc: "Total meetings count करनेकेलिए"
    },
    {
      label: "Present Parents",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Present parents count करनेकेलिए"
    },
    {
      label: "Absent Parents",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent parents count करनेकेलिए"
    },
    {
      label: "Meeting Attendance %",
      code: '=(COUNTIF(E2:E100,"PRESENT")/COUNTA(B2:B100))*100',
      desc: "Meeting attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Positive Feedback",
      code: '=COUNTIF(F2:F100,"GOOD")',
      desc: "Positive feedback count करनेकेलिए"
    },
    {
      label: "Negative Feedback",
      code: '=COUNTIF(F2:F100,"BAD")',
      desc: "Negative feedback count करनेकेलिए"
    },
    {
      label: "Average Feedback Score",
      code: '=AVERAGE(G2:G100)',
      desc: "Average feedback score calculate करनेकेलिए"
    },
    {
      label: "Highest Feedback",
      code: '=MAX(G2:G100)',
      desc: "Highest feedback score देखनेकेलिए"
    },
    {
      label: "Lowest Feedback",
      code: '=MIN(G2:G100)',
      desc: "Lowest feedback score देखनेकेलिए"
    },
    {
      label: "Meeting Status",
      code: '=IF(G2>=80,"SUCCESS","IMPROVE")',
      desc: "Meeting performance status check करनेकेलिए"
    }
  ]
},

{
  id: 27,
  name: "ONLINE CLASS REPORT",
  icon: "💻",
  category: "Education",
  color: "#3f51b5",
  colorRgb: "rgba(63,81,181,0.25)",
  use: "Online classes attendance, duration और performance manage करनेकेलिए",
  tags: ["ONLINE","CLASS","ZOOM","ATTENDANCE","STUDENTS"],
  formulas: [
    {
      label: "Total Online Classes",
      code: '=COUNTA(B2:B100)',
      desc: "Total online classes count करनेकेलिए"
    },
    {
      label: "Attended Students",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Online class attended students count करनेकेलिए"
    },
    {
      label: "Absent Students",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent students count करनेकेलिए"
    },
    {
      label: "Online Attendance %",
      code: '=(COUNTIF(E2:E100,"PRESENT")/COUNTA(B2:B100))*100',
      desc: "Online attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Average Class Duration",
      code: '=AVERAGE(F2:F100)',
      desc: "Average class duration calculate करनेकेलिए"
    },
    {
      label: "Highest Duration",
      code: '=MAX(F2:F100)',
      desc: "Highest class duration देखनेकेलिए"
    },
    {
      label: "Lowest Duration",
      code: '=MIN(F2:F100)',
      desc: "Lowest class duration देखनेकेलिए"
    },
    {
      label: "Assignment Submitted",
      code: '=COUNTIF(G2:G100,"SUBMITTED")',
      desc: "Submitted assignments count करनेकेलिए"
    },
    {
      label: "Pending Assignments",
      code: '=COUNTIF(G2:G100,"PENDING")',
      desc: "Pending assignments count करनेकेलिए"
    },
    {
      label: "Online Class Status",
      code: '=IF(H2>=75,"ACTIVE","LOW")',
      desc: "Online class status check करनेकेलिए"
    }
  ]
},
//Education REPORT 👆

 // Office REPORT 👇
{
  id: 101,
  name: "EMPLOYEE ATTENDANCE REPORT",
  icon: "🧑‍💼",
  category: "Office",
  color: "#00c8ff",
  colorRgb: "rgba(0,200,255,0.25)",
  use: "Employee attendance, present, absent और late records manage करनेकेलिए",
  tags: ["ATTENDANCE","EMPLOYEE","PRESENT","ABSENT","OFFICE"],
  formulas: [
    {
      label: "Total Employees",
      code: '=COUNTA(B2:B100)',
      desc: "Total employees count करनेकेलिए"
    },
    {
      label: "Present Employees",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Present employees count करनेकेलिए"
    },
    {
      label: "Absent Employees",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent employees count करनेकेलिए"
    },
    {
      label: "Late Employees",
      code: '=COUNTIF(E2:E100,"LATE")',
      desc: "Late employees count करनेकेलिए"
    },
    {
      label: "Attendance Percentage",
      code: '=(COUNTIF(E2:E100,"PRESENT")/COUNTA(B2:B100))*100',
      desc: "Attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Working Days",
      code: '=COUNTA(E2:E100)',
      desc: "Total working days count करनेकेलिए"
    },
    {
      label: "Average Attendance",
      code: '=AVERAGE(F2:F100)',
      desc: "Average attendance calculate करनेकेलिए"
    },
    {
      label: "Highest Attendance",
      code: '=MAX(F2:F100)',
      desc: "Highest attendance देखनेकेलिए"
    },
    {
      label: "Lowest Attendance",
      code: '=MIN(F2:F100)',
      desc: "Lowest attendance देखनेकेलिए"
    },
    {
      label: "Attendance Status",
      code: '=IF(F2>=90,"GOOD","LOW")',
      desc: "Attendance performance check करनेकेलिए"
    }
  ]
},

{
  id: 102,
  name: "SALARY REPORT",
  icon: "💰",
  category: "Office",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "Employee salary, bonus और deductions manage करनेकेलिए",
  tags: ["SALARY","BONUS","DEDUCTION","PAYMENT","EMPLOYEE"],
  formulas: [
    {
      label: "Basic Salary",
      code: '=SUM(E2:E100)',
      desc: "Basic salary calculate करनेकेलिए"
    },
    {
      label: "Bonus Amount",
      code: '=SUM(F2:F100)',
      desc: "Bonus amount calculate करनेकेलिए"
    },
    {
      label: "Deduction Amount",
      code: '=SUM(G2:G100)',
      desc: "Deduction amount calculate करनेकेलिए"
    },
    {
      label: "Net Salary",
      code: '=E2+F2-G2',
      desc: "Net salary calculate करनेकेलिए"
    },
    {
      label: "Highest Salary",
      code: '=MAX(H2:H100)',
      desc: "Highest salary देखनेकेलिए"
    },
    {
      label: "Lowest Salary",
      code: '=MIN(H2:H100)',
      desc: "Lowest salary देखनेकेलिए"
    },
    {
      label: "Average Salary",
      code: '=AVERAGE(H2:H100)',
      desc: "Average salary calculate करनेकेलिए"
    },
    {
      label: "Paid Employees",
      code: '=COUNTIF(I2:I100,"PAID")',
      desc: "Paid employees count करनेकेलिए"
    },
    {
      label: "Unpaid Employees",
      code: '=COUNTIF(I2:I100,"UNPAID")',
      desc: "Unpaid employees count करनेकेलिए"
    },
    {
      label: "Salary Status",
      code: '=IF(H2>=50000,"HIGH","NORMAL")',
      desc: "Salary status check करनेकेलिए"
    }
  ]
},

{
  id: 103,
  name: "LEAVE REPORT",
  icon: "🌴",
  category: "Office",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Employees leave applications और approvals manage करनेकेलिए",
  tags: ["LEAVE","HOLIDAY","APPROVAL","EMPLOYEE","VACATION"],
  formulas: [
    {
      label: "Total Leave Requests",
      code: '=COUNTA(B2:B100)',
      desc: "Total leave requests count करनेकेलिए"
    },
    {
      label: "Approved Leaves",
      code: '=COUNTIF(E2:E100,"APPROVED")',
      desc: "Approved leaves count करनेकेलिए"
    },
    {
      label: "Rejected Leaves",
      code: '=COUNTIF(E2:E100,"REJECTED")',
      desc: "Rejected leaves count करनेकेलिए"
    },
    {
      label: "Pending Leaves",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending leaves count करनेकेलिए"
    },
    {
      label: "Leave Days",
      code: '=SUM(F2:F100)',
      desc: "Total leave days calculate करनेकेलिए"
    },
    {
      label: "Average Leave Days",
      code: '=AVERAGE(F2:F100)',
      desc: "Average leave days calculate करनेकेलिए"
    },
    {
      label: "Highest Leave Days",
      code: '=MAX(F2:F100)',
      desc: "Highest leave days देखनेकेलिए"
    },
    {
      label: "Lowest Leave Days",
      code: '=MIN(F2:F100)',
      desc: "Lowest leave days देखनेकेलिए"
    },
    {
      label: "Leave Approval %",
      code: '=(COUNTIF(E2:E100,"APPROVED")/COUNTA(B2:B100))*100',
      desc: "Leave approval percentage calculate करनेकेलिए"
    },
    {
      label: "Leave Status",
      code: '=IF(F2>10,"LONG","SHORT")',
      desc: "Leave type status check करनेकेलिए"
    }
  ]
},

{
  id: 104,
  name: "DEPARTMENT REPORT",
  icon: "🏢",
  category: "Office",
  color: "#9c27b0",
  colorRgb: "rgba(156,39,176,0.25)",
  use: "Office departments और employees records manage करनेकेलिए",
  tags: ["DEPARTMENT","EMPLOYEE","TEAM","OFFICE","WORK"],
  formulas: [
    {
      label: "Total Departments",
      code: '=COUNTA(B2:B100)',
      desc: "Total departments count करनेकेलिए"
    },
    {
      label: "IT Department Employees",
      code: '=COUNTIF(E2:E100,"IT")',
      desc: "IT employees count करनेकेलिए"
    },
    {
      label: "HR Department Employees",
      code: '=COUNTIF(E2:E100,"HR")',
      desc: "HR employees count करनेकेलिए"
    },
    {
      label: "Sales Department Employees",
      code: '=COUNTIF(E2:E100,"SALES")',
      desc: "Sales employees count करनेकेलिए"
    },
    {
      label: "Department Budget",
      code: '=SUM(F2:F100)',
      desc: "Department budget calculate करनेकेलिए"
    },
    {
      label: "Average Department Budget",
      code: '=AVERAGE(F2:F100)',
      desc: "Average budget calculate करनेकेलिए"
    },
    {
      label: "Highest Budget",
      code: '=MAX(F2:F100)',
      desc: "Highest budget देखनेकेलिए"
    },
    {
      label: "Lowest Budget",
      code: '=MIN(F2:F100)',
      desc: "Lowest budget देखनेकेलिए"
    },
    {
      label: "Department Performance",
      code: '=AVERAGE(G2:G100)',
      desc: "Department performance calculate करनेकेलिए"
    },
    {
      label: "Department Status",
      code: '=IF(G2>=80,"GOOD","IMPROVE")',
      desc: "Department status check करनेकेलिए"
    }
  ]
},

{
  id: 105,
  name: "PERFORMANCE REPORT",
  icon: "📈",
  category: "Office",
  color: "#f44336",
  colorRgb: "rgba(244,67,54,0.25)",
  use: "Employee performance और productivity track करनेकेलिए",
  tags: ["PERFORMANCE","TARGET","WORK","EMPLOYEE","PRODUCTIVITY"],
  formulas: [
    {
      label: "Total Employees",
      code: '=COUNTA(B2:B100)',
      desc: "Total employees count करनेकेलिए"
    },
    {
      label: "Completed Targets",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed targets count करनेकेलिए"
    },
    {
      label: "Pending Targets",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending targets count करनेकेलिए"
    },
    {
      label: "Performance Score",
      code: '=AVERAGE(F2:F100)',
      desc: "Performance score calculate करनेकेलिए"
    },
    {
      label: "Highest Performance",
      code: '=MAX(F2:F100)',
      desc: "Highest performance देखनेकेलिए"
    },
    {
      label: "Lowest Performance",
      code: '=MIN(F2:F100)',
      desc: "Lowest performance देखनेकेलिए"
    },
    {
      label: "Employee Rank",
      code: '=RANK(F2,$F$2:$F$100,0)',
      desc: "Employee rank calculate करनेकेलिए"
    },
    {
      label: "Performance Percentage",
      code: '=(SUM(F2:F100)/1000)*100',
      desc: "Performance percentage calculate करनेकेलिए"
    },
    {
      label: "Bonus Eligibility",
      code: '=IF(F2>=90,"YES","NO")',
      desc: "Bonus eligibility check करनेकेलिए"
    },
    {
      label: "Performance Status",
      code: '=IF(F2>=75,"EXCELLENT","AVERAGE")',
      desc: "Performance status check करने के लिए"
    }
  ]
},
{
  id: 106,
  name: "DAILY WORK REPORT",
  icon: "📝",
  category: "Office",
  color: "#3f51b5",
  colorRgb: "rgba(63,81,181,0.25)",
  use: "Daily office tasks, completed work और pending work manage करनेकेलिए",
  tags: ["WORK","TASK","DAILY","OFFICE","PRODUCTIVITY"],
  formulas: [
    {
      label: "Total Tasks",
      code: '=COUNTA(B2:B100)',
      desc: "Total tasks count करनेकेलिए"
    },
    {
      label: "Completed Tasks",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed tasks count करनेकेलिए"
    },
    {
      label: "Pending Tasks",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending tasks count करनेकेलिए"
    },
    {
      label: "In Progress Tasks",
      code: '=COUNTIF(E2:E100,"IN PROGRESS")',
      desc: "In progress tasks count करनेकेलिए"
    },
    {
      label: "Completion Percentage",
      code: '=(COUNTIF(E2:E100,"COMPLETED")/COUNTA(B2:B100))*100',
      desc: "Task completion percentage calculate करनेकेलिए"
    },
    {
      label: "Average Work Hours",
      code: '=AVERAGE(F2:F100)',
      desc: "Average work hours calculate करनेकेलिए"
    },
    {
      label: "Highest Work Hours",
      code: '=MAX(F2:F100)',
      desc: "Highest work hours देखनेकेलिए"
    },
    {
      label: "Lowest Work Hours",
      code: '=MIN(F2:F100)',
      desc: "Lowest work hours देखनेकेलिए"
    },
    {
      label: "Employee Productivity",
      code: '=AVERAGE(G2:G100)',
      desc: "Employee productivity calculate करनेकेलिए"
    },
    {
      label: "Daily Work Status",
      code: '=IF(G2>=80,"GOOD","LOW")',
      desc: "Daily work performance check करनेकेलिए"
    }
  ]
},

{
  id: 107,
  name: "MEETING REPORT",
  icon: "📅",
  category: "Office",
  color: "#009688",
  colorRgb: "rgba(0,150,136,0.25)",
  use: "Office meetings, attendance और meeting records manage करनेकेलिए",
  tags: ["MEETING","TEAM","ATTENDANCE","OFFICE","SCHEDULE"],
  formulas: [
    {
      label: "Total Meetings",
      code: '=COUNTA(B2:B100)',
      desc: "Total meetings count करनेकेलिए"
    },
    {
      label: "Attended Employees",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Meeting attended employees count करनेकेलिए"
    },
    {
      label: "Absent Employees",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent employees count करनेकेलिए"
    },
    {
      label: "Meeting Attendance %",
      code: '=(COUNTIF(E2:E100,"PRESENT")/COUNTA(B2:B100))*100',
      desc: "Meeting attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Meeting Duration",
      code: '=SUM(F2:F100)',
      desc: "Total meeting duration calculate करनेकेलिए"
    },
    {
      label: "Average Meeting Time",
      code: '=AVERAGE(F2:F100)',
      desc: "Average meeting time calculate करनेकेलिए"
    },
    {
      label: "Longest Meeting",
      code: '=MAX(F2:F100)',
      desc: "Longest meeting duration देखनेकेलिए"
    },
    {
      label: "Shortest Meeting",
      code: '=MIN(F2:F100)',
      desc: "Shortest meeting duration देखनेकेलिए"
    },
    {
      label: "Completed Meetings",
      code: '=COUNTIF(G2:G100,"DONE")',
      desc: "Completed meetings count करनेकेलिए"
    },
    {
      label: "Meeting Status",
      code: '=IF(H2>=75,"SUCCESS","PENDING")',
      desc: "Meeting success status check करनेकेलिए"
    }
  ]
},

{
  id: 108,
  name: "PROJECT REPORT",
  icon: "📂",
  category: "Office",
  color: "#795548",
  colorRgb: "rgba(121,85,72,0.25)",
  use: "Office projects, deadlines और project status manage करनेकेलिए",
  tags: ["PROJECT","WORK","DEADLINE","TEAM","STATUS"],
  formulas: [
    {
      label: "Total Projects",
      code: '=COUNTA(B2:B100)',
      desc: "Total projects count करनेकेलिए"
    },
    {
      label: "Completed Projects",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed projects count करनेकेलिए"
    },
    {
      label: "Pending Projects",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending projects count करनेकेलिए"
    },
    {
      label: "Running Projects",
      code: '=COUNTIF(E2:E100,"RUNNING")',
      desc: "Running projects count करनेकेलिए"
    },
    {
      label: "Project Budget",
      code: '=SUM(F2:F100)',
      desc: "Project budget calculate करनेकेलिए"
    },
    {
      label: "Average Budget",
      code: '=AVERAGE(F2:F100)',
      desc: "Average project budget calculate करनेकेलिए"
    },
    {
      label: "Highest Budget",
      code: '=MAX(F2:F100)',
      desc: "Highest budget देखनेकेलिए"
    },
    {
      label: "Lowest Budget",
      code: '=MIN(F2:F100)',
      desc: "Lowest budget देखनेकेलिए"
    },
    {
      label: "Completion Percentage",
      code: '=(COUNTIF(E2:E100,"COMPLETED")/COUNTA(B2:B100))*100',
      desc: "Project completion percentage calculate करनेकेलिए"
    },
    {
      label: "Project Status",
      code: '=IF(G2>=80,"ON TIME","DELAY")',
      desc: "Project status check करनेकेलिए"
    }
  ]
},

{
  id: 109,
  name: "CLIENT REPORT",
  icon: "🤝",
  category: "Office",
  color: "#673ab7",
  colorRgb: "rgba(103,58,183,0.25)",
  use: "Clients records, payments और deals manage करनेकेलिए",
  tags: ["CLIENT","PAYMENT","DEAL","BUSINESS","OFFICE"],
  formulas: [
    {
      label: "Total Clients",
      code: '=COUNTA(B2:B100)',
      desc: "Total clients count करनेकेलिए"
    },
    {
      label: "Active Clients",
      code: '=COUNTIF(E2:E100,"ACTIVE")',
      desc: "Active clients count करनेकेलिए"
    },
    {
      label: "Inactive Clients",
      code: '=COUNTIF(E2:E100,"INACTIVE")',
      desc: "Inactive clients count करनेकेलिए"
    },
    {
      label: "Total Payments",
      code: '=SUM(F2:F100)',
      desc: "Client payments calculate करनेकेलिए"
    },
    {
      label: "Pending Payments",
      code: '=SUM(G2:G100)',
      desc: "Pending client payments calculate करनेकेलिए"
    },
    {
      label: "Average Client Payment",
      code: '=AVERAGE(F2:F100)',
      desc: "Average payment calculate करनेकेलिए"
    },
    {
      label: "Highest Payment",
      code: '=MAX(F2:F100)',
      desc: "Highest client payment देखनेकेलिए"
    },
    {
      label: "Lowest Payment",
      code: '=MIN(F2:F100)',
      desc: "Lowest client payment देखनेकेलिए"
    },
    {
      label: "Client Satisfaction",
      code: '=AVERAGE(H2:H100)',
      desc: "Client satisfaction score calculate करनेकेलिए"
    },
    {
      label: "Client Status",
      code: '=IF(H2>=80,"HAPPY","UNHAPPY")',
      desc: "Client status check करनेकेलिए"
    }
  ]
},

{
  id: 110,
  name: "INVOICE REPORT",
  icon: "🧾",
  category: "Office",
  color: "#e91e63",
  colorRgb: "rgba(233,30,99,0.25)",
  use: "Invoices, payments और billing records manage करनेकेलिए",
  tags: ["INVOICE","BILL","PAYMENT","OFFICE","ACCOUNT"],
  formulas: [
    {
      label: "Total Invoices",
      code: '=COUNTA(B2:B100)',
      desc: "Total invoices count करनेकेलिए"
    },
    {
      label: "Paid Invoices",
      code: '=COUNTIF(E2:E100,"PAID")',
      desc: "Paid invoices count करनेकेलिए"
    },
    {
      label: "Unpaid Invoices",
      code: '=COUNTIF(E2:E100,"UNPAID")',
      desc: "Unpaid invoices count करनेकेलिए"
    },
    {
      label: "Invoice Amount",
      code: '=SUM(F2:F100)',
      desc: "Invoice amount calculate करनेकेलिए"
    },
    {
      label: "Pending Amount",
      code: '=SUM(G2:G100)',
      desc: "Pending invoice amount calculate करनेकेलिए"
    },
    {
      label: "GST Amount",
      code: '=SUM(H2:H100)',
      desc: "GST amount calculate करनेकेलिए"
    },
    {
      label: "Average Invoice",
      code: '=AVERAGE(F2:F100)',
      desc: "Average invoice amount calculate करनेकेलिए"
    },
    {
      label: "Highest Invoice",
      code: '=MAX(F2:F100)',
      desc: "Highest invoice amount देखनेकेलिए"
    },
    {
      label: "Lowest Invoice",
      code: '=MIN(F2:F100)',
      desc: "Lowest invoice amount देखनेकेलिए"
    },
    {
      label: "Invoice Status",
      code: '=IF(G2=0,"CLEAR","PENDING")',
      desc: "Invoice payment status check करनेकेलिए"
    }
  ]
},
{
  id: 111,
  name: "EXPENSE REPORT",
  icon: "💸",
  category: "Office",
  color: "#ff5722",
  colorRgb: "rgba(255,87,34,0.25)",
  use: "Office expenses, daily spending और cost tracking करनेकेलिए",
  tags: ["EXPENSE","COST","MONEY","OFFICE","PAYMENT"],
  formulas: [
    {
      label: "Total Expenses",
      code: '=SUM(E2:E100)',
      desc: "Total expenses calculate करनेकेलिए"
    },
    {
      label: "Highest Expense",
      code: '=MAX(E2:E100)',
      desc: "Highest expense देखनेकेलिए"
    },
    {
      label: "Lowest Expense",
      code: '=MIN(E2:E100)',
      desc: "Lowest expense देखनेकेलिए"
    },
    {
      label: "Average Expense",
      code: '=AVERAGE(E2:E100)',
      desc: "Average expense calculate करनेकेलिए"
    },
    {
      label: "Food Expense",
      code: '=SUMIF(D2:D100,"FOOD",E2:E100)',
      desc: "Food expenses calculate करनेकेलिए"
    },
    {
      label: "Travel Expense",
      code: '=SUMIF(D2:D100,"TRAVEL",E2:E100)',
      desc: "Travel expenses calculate करनेकेलिए"
    },
    {
      label: "Office Expense",
      code: '=SUMIF(D2:D100,"OFFICE",E2:E100)',
      desc: "Office expenses calculate करनेकेलिए"
    },
    {
      label: "Paid Expenses",
      code: '=COUNTIF(F2:F100,"PAID")',
      desc: "Paid expenses count करनेकेलिए"
    },
    {
      label: "Pending Expenses",
      code: '=COUNTIF(F2:F100,"PENDING")',
      desc: "Pending expenses count करनेकेलिए"
    },
    {
      label: "Expense Status",
      code: '=IF(E2>50000,"HIGH","NORMAL")',
      desc: "Expense status check करनेकेलिए"
    }
  ]
},

{
  id: 112,
  name: "PROFIT REPORT",
  icon: "📈",
  category: "Office",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "Office profit, income और business growth calculate करनेकेलिए",
  tags: ["PROFIT","INCOME","BUSINESS","OFFICE","GROWTH"],
  formulas: [
    {
      label: "Total Sales",
      code: '=SUM(E2:E100)',
      desc: "Total sales calculate करनेकेलिए"
    },
    {
      label: "Total Expenses",
      code: '=SUM(F2:F100)',
      desc: "Total expenses calculate करनेकेलिए"
    },
    {
      label: "Net Profit",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Net profit calculate करनेकेलिए"
    },
    {
      label: "Profit Percentage",
      code: '=((SUM(E2:E100)-SUM(F2:F100))/SUM(E2:E100))*100',
      desc: "Profit percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Profit",
      code: '=MAX(G2:G100)',
      desc: "Highest profit देखनेकेलिए"
    },
    {
      label: "Lowest Profit",
      code: '=MIN(G2:G100)',
      desc: "Lowest profit देखनेकेलिए"
    },
    {
      label: "Average Profit",
      code: '=AVERAGE(G2:G100)',
      desc: "Average profit calculate करनेकेलिए"
    },
    {
      label: "Profitable Months",
      code: '=COUNTIF(G2:G100,">0")',
      desc: "Profitable months count करनेकेलिए"
    },
    {
      label: "Loss Months",
      code: '=COUNTIF(G2:G100,"<0")',
      desc: "Loss months count करनेकेलिए"
    },
    {
      label: "Profit Status",
      code: '=IF(G2>0,"PROFIT","LOSS")',
      desc: "Business status check करनेकेलिए"
    }
  ]
},

{
  id: 113,
  name: "LOSS REPORT",
  icon: "📉",
  category: "Office",
  color: "#f44336",
  colorRgb: "rgba(244,67,54,0.25)",
  use: "Office losses, expenses और negative growth track करनेकेलिए",
  tags: ["LOSS","EXPENSE","OFFICE","BUSINESS","MONEY"],
  formulas: [
    {
      label: "Total Income",
      code: '=SUM(E2:E100)',
      desc: "Total income calculate करनेकेलिए"
    },
    {
      label: "Total Expenses",
      code: '=SUM(F2:F100)',
      desc: "Total expenses calculate करनेकेलिए"
    },
    {
      label: "Net Loss",
      code: '=SUM(F2:F100)-SUM(E2:E100)',
      desc: "Net loss calculate करनेकेलिए"
    },
    {
      label: "Loss Percentage",
      code: '=((SUM(F2:F100)-SUM(E2:E100))/SUM(F2:F100))*100',
      desc: "Loss percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Loss",
      code: '=MAX(G2:G100)',
      desc: "Highest loss देखनेकेलिए"
    },
    {
      label: "Lowest Loss",
      code: '=MIN(G2:G100)',
      desc: "Lowest loss देखनेकेलिए"
    },
    {
      label: "Average Loss",
      code: '=AVERAGE(G2:G100)',
      desc: "Average loss calculate करनेकेलिए"
    },
    {
      label: "Loss Months",
      code: '=COUNTIF(G2:G100,">0")',
      desc: "Loss months count करनेकेलिए"
    },
    {
      label: "Recovery Needed",
      code: '=IF(G2>50000,"URGENT","NORMAL")',
      desc: "Recovery requirement check करनेकेलिए"
    },
    {
      label: "Loss Status",
      code: '=IF(G2>0,"LOSS","SAFE")',
      desc: "Loss status check करनेकेलिए"
    }
  ]
},

{
  id: 114,
  name: "OFFICE ASSET REPORT",
  icon: "🖥️",
  category: "Office",
  color: "#607d8b",
  colorRgb: "rgba(96,125,139,0.25)",
  use: "Office assets, computers और equipment manage करनेकेलिए",
  tags: ["ASSET","OFFICE","COMPUTER","EQUIPMENT","STOCK"],
  formulas: [
    {
      label: "Total Assets",
      code: '=COUNTA(B2:B100)',
      desc: "Total assets count करनेकेलिए"
    },
    {
      label: "Working Assets",
      code: '=COUNTIF(E2:E100,"WORKING")',
      desc: "Working assets count करनेकेलिए"
    },
    {
      label: "Damaged Assets",
      code: '=COUNTIF(E2:E100,"DAMAGED")',
      desc: "Damaged assets count करनेकेलिए"
    },
    {
      label: "Asset Value",
      code: '=SUM(F2:F100)',
      desc: "Total asset value calculate करनेकेलिए"
    },
    {
      label: "Average Asset Value",
      code: '=AVERAGE(F2:F100)',
      desc: "Average asset value calculate करनेकेलिए"
    },
    {
      label: "Highest Asset Value",
      code: '=MAX(F2:F100)',
      desc: "Highest asset value देखनेकेलिए"
    },
    {
      label: "Lowest Asset Value",
      code: '=MIN(F2:F100)',
      desc: "Lowest asset value देखनेकेलिए"
    },
    {
      label: "Maintenance Cost",
      code: '=SUM(G2:G100)',
      desc: "Maintenance cost calculate करनेकेलिए"
    },
    {
      label: "Asset Depreciation",
      code: '=F2*10%',
      desc: "Asset depreciation calculate करनेकेलिए"
    },
    {
      label: "Asset Status",
      code: '=IF(E2="WORKING","ACTIVE","REPAIR")',
      desc: "Asset condition check करनेकेलिए"
    }
  ]
},

{
  id: 115,
  name: "OFFICE STOCK REPORT",
  icon: "📦",
  category: "Office",
  color: "#9e9e9e",
  colorRgb: "rgba(158,158,158,0.25)",
  use: "Office stock, inventory और supplies manage करनेकेलिए",
  tags: ["STOCK","INVENTORY","SUPPLIES","OFFICE","PRODUCT"],
  formulas: [
    {
      label: "Total Stock Items",
      code: '=COUNTA(B2:B100)',
      desc: "Total stock items count करनेकेलिए"
    },
    {
      label: "Available Stock",
      code: '=SUM(E2:E100)',
      desc: "Available stock calculate करनेकेलिए"
    },
    {
      label: "Used Stock",
      code: '=SUM(F2:F100)',
      desc: "Used stock calculate करनेकेलिए"
    },
    {
      label: "Remaining Stock",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Remaining stock calculate करनेकेलिए"
    },
    {
      label: "Low Stock Items",
      code: '=COUNTIF(G2:G100,"<10")',
      desc: "Low stock items count करनेकेलिए"
    },
    {
      label: "Highest Stock",
      code: '=MAX(E2:E100)',
      desc: "Highest stock quantity देखनेकेलिए"
    },
    {
      label: "Lowest Stock",
      code: '=MIN(E2:E100)',
      desc: "Lowest stock quantity देखनेकेलिए"
    },
    {
      label: "Average Stock",
      code: '=AVERAGE(E2:E100)',
      desc: "Average stock quantity calculate करनेकेलिए"
    },
    {
      label: "Stock Usage %",
      code: '=(SUM(F2:F100)/SUM(E2:E100))*100',
      desc: "Stock usage percentage calculate करनेकेलिए"
    },
    {
      label: "Stock Status",
      code: '=IF(G2<10,"LOW","AVAILABLE")',
      desc: "Stock availability check करनेकेलिए"
    }
  ]
},
{
  id: 116,
  name: "STAFF REPORT",
  icon: "👨‍💼",
  category: "Office",
  color: "#2196f3",
  colorRgb: "rgba(33,150,243,0.25)",
  use: "Office staff details, records और performance manage करनेकेलिए",
  tags: ["STAFF","EMPLOYEE","OFFICE","TEAM","RECORD"],
  formulas: [
    {
      label: "Total Staff",
      code: '=COUNTA(B2:B100)',
      desc: "Total staff count करनेकेलिए"
    },
    {
      label: "Male Staff",
      code: '=COUNTIF(E2:E100,"MALE")',
      desc: "Male staff count करनेकेलिए"
    },
    {
      label: "Female Staff",
      code: '=COUNTIF(E2:E100,"FEMALE")',
      desc: "Female staff count करनेकेलिए"
    },
    {
      label: "Active Staff",
      code: '=COUNTIF(F2:F100,"ACTIVE")',
      desc: "Active staff count करनेकेलिए"
    },
    {
      label: "Inactive Staff",
      code: '=COUNTIF(F2:F100,"INACTIVE")',
      desc: "Inactive staff count करनेकेलिए"
    },
    {
      label: "Average Salary",
      code: '=AVERAGE(G2:G100)',
      desc: "Average salary calculate करनेकेलिए"
    },
    {
      label: "Highest Salary",
      code: '=MAX(G2:G100)',
      desc: "Highest salary देखनेकेलिए"
    },
    {
      label: "Lowest Salary",
      code: '=MIN(G2:G100)',
      desc: "Lowest salary देखनेकेलिए"
    },
    {
      label: "Attendance Percentage",
      code: '=AVERAGE(H2:H100)',
      desc: "Staff attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Staff Status",
      code: '=IF(H2>=80,"GOOD","LOW")',
      desc: "Staff performance status check करनेकेलिए"
    }
  ]
},

{
  id: 117,
  name: "PAYROLL REPORT",
  icon: "💳",
  category: "Office",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "Payroll, salary payments और deductions manage करनेकेलिए",
  tags: ["PAYROLL","SALARY","PAYMENT","BONUS","OFFICE"],
  formulas: [
    {
      label: "Basic Salary",
      code: '=SUM(E2:E100)',
      desc: "Basic salary calculate करनेकेलिए"
    },
    {
      label: "Bonus Amount",
      code: '=SUM(F2:F100)',
      desc: "Bonus amount calculate करनेकेलिए"
    },
    {
      label: "Deduction Amount",
      code: '=SUM(G2:G100)',
      desc: "Deduction amount calculate करनेकेलिए"
    },
    {
      label: "Net Payroll",
      code: '=SUM(E2:E100)+SUM(F2:F100)-SUM(G2:G100)',
      desc: "Net payroll calculate करनेकेलिए"
    },
    {
      label: "Paid Employees",
      code: '=COUNTIF(H2:H100,"PAID")',
      desc: "Paid employees count करनेकेलिए"
    },
    {
      label: "Pending Payments",
      code: '=COUNTIF(H2:H100,"PENDING")',
      desc: "Pending payments count करनेकेलिए"
    },
    {
      label: "Highest Payroll",
      code: '=MAX(I2:I100)',
      desc: "Highest payroll देखनेकेलिए"
    },
    {
      label: "Lowest Payroll",
      code: '=MIN(I2:I100)',
      desc: "Lowest payroll देखनेकेलिए"
    },
    {
      label: "Average Payroll",
      code: '=AVERAGE(I2:I100)',
      desc: "Average payroll calculate करनेकेलिए"
    },
    {
      label: "Payroll Status",
      code: '=IF(I2>=50000,"HIGH","NORMAL")',
      desc: "Payroll status check करनेकेलिए"
    }
  ]
},

{
  id: 118,
  name: "MONTHLY OFFICE REPORT",
  icon: "📅",
  category: "Office",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Monthly office performance, expenses और income manage करनेकेलिए",
  tags: ["MONTHLY","OFFICE","REPORT","INCOME","EXPENSE"],
  formulas: [
    {
      label: "Monthly Income",
      code: '=SUM(E2:E100)',
      desc: "Monthly income calculate करनेकेलिए"
    },
    {
      label: "Monthly Expense",
      code: '=SUM(F2:F100)',
      desc: "Monthly expenses calculate करनेकेलिए"
    },
    {
      label: "Monthly Profit",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Monthly profit calculate करनेकेलिए"
    },
    {
      label: "Profit Percentage",
      code: '=((SUM(E2:E100)-SUM(F2:F100))/SUM(E2:E100))*100',
      desc: "Monthly profit percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Income",
      code: '=MAX(E2:E100)',
      desc: "Highest monthly income देखनेकेलिए"
    },
    {
      label: "Lowest Income",
      code: '=MIN(E2:E100)',
      desc: "Lowest monthly income देखनेकेलिए"
    },
    {
      label: "Average Income",
      code: '=AVERAGE(E2:E100)',
      desc: "Average monthly income calculate करनेकेलिए"
    },
    {
      label: "Highest Expense",
      code: '=MAX(F2:F100)',
      desc: "Highest monthly expense देखनेकेलिए"
    },
    {
      label: "Average Expense",
      code: '=AVERAGE(F2:F100)',
      desc: "Average monthly expense calculate करनेकेलिए"
    },
    {
      label: "Monthly Status",
      code: '=IF(G2>0,"PROFIT","LOSS")',
      desc: "Monthly office status check करनेकेलिए"
    }
  ]
},
 // Office REPORT 👆

 // SHOP REPORT 👇
 {
  id: 201,
  name: "SALES REPORT",
  icon: "🛒",
  category: "Shop",
  color: "#00c8ff",
  colorRgb: "rgba(0,200,255,0.25)",
  use: "Shop sales, products और income track करनेकेलिए",
  tags: ["SALES","SHOP","PRODUCT","INCOME","CUSTOMER"],
  formulas: [
    {
      label: "Total Sales",
      code: '=SUM(E2:E100)',
      desc: "Total sales amount calculate करनेकेलिए"
    },
    {
      label: "Total Products Sold",
      code: '=SUM(F2:F100)',
      desc: "Total sold products calculate करनेकेलिए"
    },
    {
      label: "Highest Sale",
      code: '=MAX(E2:E100)',
      desc: "Highest sales amount देखनेकेलिए"
    },
    {
      label: "Lowest Sale",
      code: '=MIN(E2:E100)',
      desc: "Lowest sales amount देखनेकेलिए"
    },
    {
      label: "Average Sale",
      code: '=AVERAGE(E2:E100)',
      desc: "Average sales calculate करनेकेलिए"
    },
    {
      label: "Cash Sales",
      code: '=SUMIF(G2:G100,"CASH",E2:E100)',
      desc: "Cash sales calculate करनेकेलिए"
    },
    {
      label: "Online Sales",
      code: '=SUMIF(G2:G100,"ONLINE",E2:E100)',
      desc: "Online sales calculate करनेकेलिए"
    },
    {
      label: "Sales Tax",
      code: '=SUM(E2:E100)*18%',
      desc: "Sales GST calculate करनेकेलिए"
    },
    {
      label: "Sales Profit",
      code: '=SUM(E2:E100)-SUM(H2:H100)',
      desc: "Sales profit calculate करनेकेलिए"
    },
    {
      label: "Sales Status",
      code: '=IF(E2>=5000,"GOOD","LOW")',
      desc: "Sales performance check करनेकेलिए"
    }
  ]
},

{
  id: 202,
  name: "DAILY SALES REPORT",
  icon: "📅",
  category: "Shop",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "Daily shop sales और daily income manage करनेकेलिए",
  tags: ["DAILY","SALES","SHOP","INCOME","REPORT"],
  formulas: [
    {
      label: "Today Sales",
      code: '=SUM(E2:E100)',
      desc: "Today total sales calculate करनेकेलिए"
    },
    {
      label: "Today Profit",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Today profit calculate करनेकेलिए"
    },
    {
      label: "Total Customers",
      code: '=COUNTA(B2:B100)',
      desc: "Today customers count करनेकेलिए"
    },
    {
      label: "Highest Daily Sale",
      code: '=MAX(E2:E100)',
      desc: "Highest daily sale देखनेकेलिए"
    },
    {
      label: "Lowest Daily Sale",
      code: '=MIN(E2:E100)',
      desc: "Lowest daily sale देखनेकेलिए"
    },
    {
      label: "Average Daily Sale",
      code: '=AVERAGE(E2:E100)',
      desc: "Average daily sales calculate करनेकेलिए"
    },
    {
      label: "Cash Collection",
      code: '=SUMIF(G2:G100,"CASH",E2:E100)',
      desc: "Cash collection calculate करनेकेलिए"
    },
    {
      label: "UPI Collection",
      code: '=SUMIF(G2:G100,"UPI",E2:E100)',
      desc: "UPI collection calculate करनेकेलिए"
    },
    {
      label: "Pending Payments",
      code: '=SUM(H2:H100)',
      desc: "Pending payments calculate करनेकेलिए"
    },
    {
      label: "Daily Status",
      code: '=IF(E2>=10000,"EXCELLENT","NORMAL")',
      desc: "Daily sales status check करनेकेलिए"
    }
  ]
},

{
  id: 203,
  name: "MONTHLY SALES REPORT",
  icon: "📆",
  category: "Shop",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Monthly sales, profit और business growth track करनेकेलिए",
  tags: ["MONTHLY","SALES","BUSINESS","PROFIT","SHOP"],
  formulas: [
    {
      label: "Monthly Sales",
      code: '=SUM(E2:E100)',
      desc: "Monthly sales calculate करनेकेलिए"
    },
    {
      label: "Monthly Expense",
      code: '=SUM(F2:F100)',
      desc: "Monthly expenses calculate करनेकेलिए"
    },
    {
      label: "Monthly Profit",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Monthly profit calculate करनेकेलिए"
    },
    {
      label: "Profit Percentage",
      code: '=((SUM(E2:E100)-SUM(F2:F100))/SUM(E2:E100))*100',
      desc: "Profit percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Monthly Sale",
      code: '=MAX(E2:E100)',
      desc: "Highest monthly sales देखनेकेलिए"
    },
    {
      label: "Lowest Monthly Sale",
      code: '=MIN(E2:E100)',
      desc: "Lowest monthly sales देखनेकेलिए"
    },
    {
      label: "Average Monthly Sale",
      code: '=AVERAGE(E2:E100)',
      desc: "Average monthly sales calculate करनेकेलिए"
    },
    {
      label: "Total Orders",
      code: '=COUNTA(B2:B100)',
      desc: "Monthly orders count करनेकेलिए"
    },
    {
      label: "Returned Orders",
      code: '=COUNTIF(G2:G100,"RETURN")',
      desc: "Returned orders count करनेकेलिए"
    },
    {
      label: "Monthly Status",
      code: '=IF(E2>=50000,"HIGH","LOW")',
      desc: "Monthly sales status check करनेकेलिए"
    }
  ]
},

{
  id: 204,
  name: "PURCHASE REPORT",
  icon: "📦",
  category: "Shop",
  color: "#9c27b0",
  colorRgb: "rgba(156,39,176,0.25)",
  use: "Shop purchases, supplier payments और stock buying manage करनेकेलिए",
  tags: ["PURCHASE","STOCK","SUPPLIER","SHOP","PRODUCT"],
  formulas: [
    {
      label: "Total Purchases",
      code: '=SUM(E2:E100)',
      desc: "Total purchases calculate करनेकेलिए"
    },
    {
      label: "Purchased Products",
      code: '=SUM(F2:F100)',
      desc: "Purchased products quantity calculate करनेकेलिए"
    },
    {
      label: "Highest Purchase",
      code: '=MAX(E2:E100)',
      desc: "Highest purchase amount देखनेकेलिए"
    },
    {
      label: "Lowest Purchase",
      code: '=MIN(E2:E100)',
      desc: "Lowest purchase amount देखनेकेलिए"
    },
    {
      label: "Average Purchase",
      code: '=AVERAGE(E2:E100)',
      desc: "Average purchase calculate करनेकेलिए"
    },
    {
      label: "Paid Purchases",
      code: '=COUNTIF(G2:G100,"PAID")',
      desc: "Paid purchases count करनेकेलिए"
    },
    {
      label: "Pending Purchases",
      code: '=COUNTIF(G2:G100,"PENDING")',
      desc: "Pending purchases count करनेकेलिए"
    },
    {
      label: "Purchase GST",
      code: '=SUM(E2:E100)*18%',
      desc: "Purchase GST calculate करनेकेलिए"
    },
    {
      label: "Supplier Payments",
      code: '=SUM(H2:H100)',
      desc: "Supplier payments calculate करनेकेलिए"
    },
    {
      label: "Purchase Status",
      code: '=IF(E2>=10000,"HIGH","NORMAL")',
      desc: "Purchase status check करनेकेलिए"
    }
  ]
},

{
  id: 205,
  name: "STOCK REPORT",
  icon: "🏷️",
  category: "Shop",
  color: "#f44336",
  colorRgb: "rgba(244,67,54,0.25)",
  use: "Shop stock, inventory और available products manage करनेकेलिए",
  tags: ["STOCK","INVENTORY","PRODUCT","SHOP","AVAILABLE"],
  formulas: [
    {
      label: "Total Stock",
      code: '=SUM(E2:E100)',
      desc: "Total stock quantity calculate करनेकेलिए"
    },
    {
      label: "Sold Stock",
      code: '=SUM(F2:F100)',
      desc: "Sold stock calculate करनेकेलिए"
    },
    {
      label: "Remaining Stock",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Remaining stock calculate करनेकेलिए"
    },
    {
      label: "Low Stock Products",
      code: '=COUNTIF(G2:G100,"<10")',
      desc: "Low stock products count करनेकेलिए"
    },
    {
      label: "Out Of Stock",
      code: '=COUNTIF(G2:G100,"0")',
      desc: "Out of stock products count करनेकेलिए"
    },
    {
      label: "Highest Stock",
      code: '=MAX(E2:E100)',
      desc: "Highest stock quantity देखनेकेलिए"
    },
    {
      label: "Lowest Stock",
      code: '=MIN(E2:E100)',
      desc: "Lowest stock quantity देखनेकेलिए"
    },
    {
      label: "Average Stock",
      code: '=AVERAGE(E2:E100)',
      desc: "Average stock quantity calculate करनेकेलिए"
    },
    {
      label: "Stock Value",
      code: '=SUM(H2:H100)',
      desc: "Total stock value calculate करनेकेलिए"
    },
    {
      label: "Stock Status",
      code: '=IF(G2<10,"LOW","AVAILABLE")',
      desc: "Stock availability check करनेकेलिए"
    }
  ]
},
{
  id: 206,
  name: "LOW STOCK REPORT",
  icon: "⚠️",
  category: "Shop",
  color: "#ff5252",
  colorRgb: "rgba(255,82,82,0.25)",
  use: "Low stock products track करने और refill manage करनेकेलिए",
  tags: ["LOWSTOCK","WARNING","PRODUCT","SHOP","INVENTORY"],
  formulas: [
    {
      label: "Low Stock Count",
      code: '=COUNTIF(E2:E100,"<10")',
      desc: "Low stock products count करनेकेलिए"
    },
    {
      label: "Out Of Stock",
      code: '=COUNTIF(E2:E100,"=0")',
      desc: "Out of stock products count करनेकेलिए"
    },
    {
      label: "Available Products",
      code: '=COUNTIF(E2:E100,">0")',
      desc: "Available products count करनेकेलिए"
    },
    {
      label: "Average Stock",
      code: '=AVERAGE(E2:E100)',
      desc: "Average stock quantity calculate करनेकेलिए"
    },
    {
      label: "Minimum Stock",
      code: '=MIN(E2:E100)',
      desc: "Minimum stock quantity देखनेकेलिए"
    },
    {
      label: "Maximum Stock",
      code: '=MAX(E2:E100)',
      desc: "Maximum stock quantity देखनेकेलिए"
    },
    {
      label: "Restock Needed",
      code: '=IF(E2<5,"YES","NO")',
      desc: "Restock requirement check करनेकेलिए"
    },
    {
      label: "Critical Stock",
      code: '=COUNTIF(E2:E100,"<5")',
      desc: "Critical low stock products count करनेकेलिए"
    },
    {
      label: "Stock Value",
      code: '=SUM(F2:F100)',
      desc: "Low stock products value calculate करनेकेलिए"
    },
    {
      label: "Stock Alert",
      code: '=IF(E2<10,"LOW STOCK","SAFE")',
      desc: "Stock alert status check करनेकेलिए"
    }
  ]
},

{
  id: 207,
  name: "PRODUCT REPORT",
  icon: "📱",
  category: "Shop",
  color: "#3f51b5",
  colorRgb: "rgba(63,81,181,0.25)",
  use: "Products details, stock और sales performance manage करनेकेलिए",
  tags: ["PRODUCT","ITEM","SHOP","STOCK","SALES"],
  formulas: [
    {
      label: "Total Products",
      code: '=COUNTA(B2:B100)',
      desc: "Total products count करनेकेलिए"
    },
    {
      label: "Total Stock",
      code: '=SUM(E2:E100)',
      desc: "Total product stock calculate करनेकेलिए"
    },
    {
      label: "Sold Products",
      code: '=SUM(F2:F100)',
      desc: "Sold products quantity calculate करनेकेलिए"
    },
    {
      label: "Remaining Products",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Remaining products calculate करनेकेलिए"
    },
    {
      label: "Highest Selling Product",
      code: '=MAX(F2:F100)',
      desc: "Highest selling product quantity देखनेकेलिए"
    },
    {
      label: "Lowest Selling Product",
      code: '=MIN(F2:F100)',
      desc: "Lowest selling product quantity देखनेकेलिए"
    },
    {
      label: "Average Product Sales",
      code: '=AVERAGE(F2:F100)',
      desc: "Average product sales calculate करनेकेलिए"
    },
    {
      label: "Product Value",
      code: '=SUM(G2:G100)',
      desc: "Total product value calculate करनेकेलिए"
    },
    {
      label: "Damaged Products",
      code: '=COUNTIF(H2:H100,"DAMAGED")',
      desc: "Damaged products count करनेकेलिए"
    },
    {
      label: "Product Status",
      code: '=IF(E2<10,"LOW","AVAILABLE")',
      desc: "Product stock status check करनेकेलिए"
    }
  ]
},

{
  id: 208,
  name: "CUSTOMER REPORT",
  icon: "👥",
  category: "Shop",
  color: "#009688",
  colorRgb: "rgba(0,150,136,0.25)",
  use: "Customer details, purchases और payment history manage करनेकेलिए",
  tags: ["CUSTOMER","SHOP","PAYMENT","ORDER","CLIENT"],
  formulas: [
    {
      label: "Total Customers",
      code: '=COUNTA(B2:B100)',
      desc: "Total customers count करनेकेलिए"
    },
    {
      label: "Active Customers",
      code: '=COUNTIF(E2:E100,"ACTIVE")',
      desc: "Active customers count करनेकेलिए"
    },
    {
      label: "Inactive Customers",
      code: '=COUNTIF(E2:E100,"INACTIVE")',
      desc: "Inactive customers count करनेकेलिए"
    },
    {
      label: "Total Purchase",
      code: '=SUM(F2:F100)',
      desc: "Customer purchases calculate करनेकेलिए"
    },
    {
      label: "Highest Customer Purchase",
      code: '=MAX(F2:F100)',
      desc: "Highest customer purchase देखनेकेलिए"
    },
    {
      label: "Lowest Customer Purchase",
      code: '=MIN(F2:F100)',
      desc: "Lowest customer purchase देखनेकेलिए"
    },
    {
      label: "Average Purchase",
      code: '=AVERAGE(F2:F100)',
      desc: "Average purchase calculate करनेकेलिए"
    },
    {
      label: "Pending Payments",
      code: '=SUM(G2:G100)',
      desc: "Pending customer payments calculate करनेकेलिए"
    },
    {
      label: "Paid Customers",
      code: '=COUNTIF(H2:H100,"PAID")',
      desc: "Paid customers count करनेकेलिए"
    },
    {
      label: "Customer Status",
      code: '=IF(F2>=5000,"VIP","NORMAL")',
      desc: "Customer category check करनेकेलिए"
    }
  ]
},

{
  id: 209,
  name: "SUPPLIER REPORT",
  icon: "🚚",
  category: "Shop",
  color: "#795548",
  colorRgb: "rgba(121,85,72,0.25)",
  use: "Suppliers details, purchase records और payment tracking करनेकेलिए",
  tags: ["SUPPLIER","PURCHASE","PAYMENT","SHOP","DELIVERY"],
  formulas: [
    {
      label: "Total Suppliers",
      code: '=COUNTA(B2:B100)',
      desc: "Total suppliers count करनेकेलिए"
    },
    {
      label: "Active Suppliers",
      code: '=COUNTIF(E2:E100,"ACTIVE")',
      desc: "Active suppliers count करनेकेलिए"
    },
    {
      label: "Inactive Suppliers",
      code: '=COUNTIF(E2:E100,"INACTIVE")',
      desc: "Inactive suppliers count करनेकेलिए"
    },
    {
      label: "Total Purchases",
      code: '=SUM(F2:F100)',
      desc: "Supplier purchases calculate करनेकेलिए"
    },
    {
      label: "Highest Supplier Payment",
      code: '=MAX(F2:F100)',
      desc: "Highest supplier payment देखनेकेलिए"
    },
    {
      label: "Lowest Supplier Payment",
      code: '=MIN(F2:F100)',
      desc: "Lowest supplier payment देखनेकेलिए"
    },
    {
      label: "Average Supplier Payment",
      code: '=AVERAGE(F2:F100)',
      desc: "Average supplier payment calculate करनेकेलिए"
    },
    {
      label: "Pending Supplier Payment",
      code: '=SUM(G2:G100)',
      desc: "Pending supplier payments calculate करनेकेलिए"
    },
    {
      label: "Paid Suppliers",
      code: '=COUNTIF(H2:H100,"PAID")',
      desc: "Paid suppliers count करनेकेलिए"
    },
    {
      label: "Supplier Status",
      code: '=IF(F2>=10000,"IMPORTANT","NORMAL")',
      desc: "Supplier importance check करनेकेलिए"
    }
  ]
},

{
  id: 210,
  name: "GST REPORT",
  icon: "🧾",
  category: "Shop",
  color: "#673ab7",
  colorRgb: "rgba(103,58,183,0.25)",
  use: "GST calculation, tax records और invoices manage करनेकेलिए",
  tags: ["GST","TAX","SHOP","INVOICE","PAYMENT"],
  formulas: [
    {
      label: "Total Sales",
      code: '=SUM(E2:E100)',
      desc: "Total sales calculate करनेकेलिए"
    },
    {
      label: "GST 5%",
      code: '=SUM(E2:E100)*5%',
      desc: "5% GST calculate करनेकेलिए"
    },
    {
      label: "GST 12%",
      code: '=SUM(E2:E100)*12%',
      desc: "12% GST calculate करनेकेलिए"
    },
    {
      label: "GST 18%",
      code: '=SUM(E2:E100)*18%',
      desc: "18% GST calculate करनेकेलिए"
    },
    {
      label: "GST 28%",
      code: '=SUM(E2:E100)*28%',
      desc: "28% GST calculate करनेकेलिए"
    },
    {
      label: "CGST",
      code: '=SUM(E2:E100)*9%',
      desc: "CGST calculate करनेकेलिए"
    },
    {
      label: "SGST",
      code: '=SUM(E2:E100)*9%',
      desc: "SGST calculate करनेकेलिए"
    },
    {
      label: "IGST",
      code: '=SUM(E2:E100)*18%',
      desc: "IGST calculate करनेकेलिए"
    },
    {
      label: "Net Amount",
      code: '=SUM(E2:E100)+SUM(F2:F100)',
      desc: "Net amount with GST calculate करनेकेलिए"
    },
    {
      label: "GST Status",
      code: '=IF(F2>0,"GST APPLIED","NO GST")',
      desc: "GST applied status check करनेकेलिए"
    }
  ]
},
{
  id: 211,
  name: "BILL REPORT",
  icon: "🧾",
  category: "Shop",
  color: "#ff6f00",
  colorRgb: "rgba(255,111,0,0.25)",
  use: "Bills, invoices और customer payments manage करनेकेलिए",
  tags: ["BILL","INVOICE","PAYMENT","SHOP","CUSTOMER"],
  formulas: [
    {
      label: "Total Bills",
      code: '=COUNTA(B2:B100)',
      desc: "Total bills count करनेकेलिए"
    },
    {
      label: "Bill Amount",
      code: '=SUM(E2:E100)',
      desc: "Total bill amount calculate करनेकेलिए"
    },
    {
      label: "Paid Bills",
      code: '=COUNTIF(F2:F100,"PAID")',
      desc: "Paid bills count करनेकेलिए"
    },
    {
      label: "Pending Bills",
      code: '=COUNTIF(F2:F100,"PENDING")',
      desc: "Pending bills count करनेकेलिए"
    },
    {
      label: "Highest Bill",
      code: '=MAX(E2:E100)',
      desc: "Highest bill amount देखनेकेलिए"
    },
    {
      label: "Lowest Bill",
      code: '=MIN(E2:E100)',
      desc: "Lowest bill amount देखनेकेलिए"
    },
    {
      label: "Average Bill",
      code: '=AVERAGE(E2:E100)',
      desc: "Average bill amount calculate करनेकेलिए"
    },
    {
      label: "GST Amount",
      code: '=SUM(E2:E100)*18%',
      desc: "GST amount calculate करनेकेलिए"
    },
    {
      label: "Net Bill Amount",
      code: '=SUM(E2:E100)+(SUM(E2:E100)*18%)',
      desc: "GST सहित total bill calculate करनेकेलिए"
    },
    {
      label: "Bill Status",
      code: '=IF(E2>=5000,"HIGH","NORMAL")',
      desc: "Bill amount status check करनेकेलिए"
    }
  ]
},

{
  id: 212,
  name: "PROFIT REPORT",
  icon: "📈",
  category: "Shop",
  color: "#00c853",
  colorRgb: "rgba(0,200,83,0.25)",
  use: "Shop profit, income और business growth calculate करनेकेलिए",
  tags: ["PROFIT","INCOME","BUSINESS","SHOP","SALES"],
  formulas: [
    {
      label: "Total Sales",
      code: '=SUM(E2:E100)',
      desc: "Total sales calculate करनेकेलिए"
    },
    {
      label: "Total Purchase",
      code: '=SUM(F2:F100)',
      desc: "Total purchase calculate करनेकेलिए"
    },
    {
      label: "Net Profit",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Net profit calculate करनेकेलिए"
    },
    {
      label: "Profit Percentage",
      code: '=((SUM(E2:E100)-SUM(F2:F100))/SUM(E2:E100))*100',
      desc: "Profit percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Profit",
      code: '=MAX(G2:G100)',
      desc: "Highest profit देखनेकेलिए"
    },
    {
      label: "Lowest Profit",
      code: '=MIN(G2:G100)',
      desc: "Lowest profit देखनेकेलिए"
    },
    {
      label: "Average Profit",
      code: '=AVERAGE(G2:G100)',
      desc: "Average profit calculate करनेकेलिए"
    },
    {
      label: "Profit Orders",
      code: '=COUNTIF(G2:G100,">0")',
      desc: "Profit orders count करनेकेलिए"
    },
    {
      label: "Loss Orders",
      code: '=COUNTIF(G2:G100,"<0")',
      desc: "Loss orders count करनेकेलिए"
    },
    {
      label: "Profit Status",
      code: '=IF(G2>0,"PROFIT","LOSS")',
      desc: "Business profit status check करनेकेलिए"
    }
  ]
},

{
  id: 213,
  name: "LOSS REPORT",
  icon: "📉",
  category: "Shop",
  color: "#d50000",
  colorRgb: "rgba(213,0,0,0.25)",
  use: "Shop losses, extra expenses और business loss track करनेकेलिए",
  tags: ["LOSS","EXPENSE","SHOP","BUSINESS","MONEY"],
  formulas: [
    {
      label: "Total Income",
      code: '=SUM(E2:E100)',
      desc: "Total income calculate करनेकेलिए"
    },
    {
      label: "Total Expense",
      code: '=SUM(F2:F100)',
      desc: "Total expenses calculate करनेकेलिए"
    },
    {
      label: "Net Loss",
      code: '=SUM(F2:F100)-SUM(E2:E100)',
      desc: "Net loss calculate करनेकेलिए"
    },
    {
      label: "Loss Percentage",
      code: '=((SUM(F2:F100)-SUM(E2:E100))/SUM(F2:F100))*100',
      desc: "Loss percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Loss",
      code: '=MAX(G2:G100)',
      desc: "Highest loss देखनेकेलिए"
    },
    {
      label: "Lowest Loss",
      code: '=MIN(G2:G100)',
      desc: "Lowest loss देखनेकेलिए"
    },
    {
      label: "Average Loss",
      code: '=AVERAGE(G2:G100)',
      desc: "Average loss calculate करनेकेलिए"
    },
    {
      label: "Loss Orders",
      code: '=COUNTIF(G2:G100,">0")',
      desc: "Loss orders count करनेकेलिए"
    },
    {
      label: "Recovery Needed",
      code: '=IF(G2>=10000,"URGENT","NORMAL")',
      desc: "Recovery status check करनेकेलिए"
    },
    {
      label: "Loss Status",
      code: '=IF(G2>0,"LOSS","SAFE")',
      desc: "Loss status check करनेकेलिए"
    }
  ]
},

{
  id: 214,
  name: "CASH REPORT",
  icon: "💵",
  category: "Shop",
  color: "#1b5e20",
  colorRgb: "rgba(27,94,32,0.25)",
  use: "Cash collection, payments और daily money flow manage करनेकेलिए",
  tags: ["CASH","PAYMENT","MONEY","SHOP","COLLECTION"],
  formulas: [
    {
      label: "Total Cash",
      code: '=SUM(E2:E100)',
      desc: "Total cash collection calculate करनेकेलिए"
    },
    {
      label: "Cash In",
      code: '=SUMIF(F2:F100,"IN",E2:E100)',
      desc: "Cash in amount calculate करनेकेलिए"
    },
    {
      label: "Cash Out",
      code: '=SUMIF(F2:F100,"OUT",E2:E100)',
      desc: "Cash out amount calculate करनेकेलिए"
    },
    {
      label: "Net Cash",
      code: '=SUMIF(F2:F100,"IN",E2:E100)-SUMIF(F2:F100,"OUT",E2:E100)',
      desc: "Net cash balance calculate करनेकेलिए"
    },
    {
      label: "Highest Cash Entry",
      code: '=MAX(E2:E100)',
      desc: "Highest cash entry देखनेकेलिए"
    },
    {
      label: "Lowest Cash Entry",
      code: '=MIN(E2:E100)',
      desc: "Lowest cash entry देखनेकेलिए"
    },
    {
      label: "Average Cash",
      code: '=AVERAGE(E2:E100)',
      desc: "Average cash amount calculate करनेकेलिए"
    },
    {
      label: "Cash Transactions",
      code: '=COUNTA(E2:E100)',
      desc: "Cash transactions count करनेकेलिए"
    },
    {
      label: "Cash Pending",
      code: '=SUM(G2:G100)',
      desc: "Pending cash amount calculate करनेकेलिए"
    },
    {
      label: "Cash Status",
      code: '=IF(H2>0,"POSITIVE","NEGATIVE")',
      desc: "Cash balance status check करनेकेलिए"
    }
  ]
},
{
  id: 215,
  name: "ONLINE ORDER REPORT",
  icon: "🛍️",
  category: "Shop",
  color: "#2962ff",
  colorRgb: "rgba(41,98,255,0.25)",
  use: "Online orders, delivery और customer purchases manage करनेकेलिए",
  tags: ["ONLINE","ORDER","SHOP","DELIVERY","CUSTOMER"],
  formulas: [
    {
      label: "Total Orders",
      code: '=COUNTA(B2:B100)',
      desc: "Total online orders count करनेकेलिए"
    },
    {
      label: "Delivered Orders",
      code: '=COUNTIF(E2:E100,"DELIVERED")',
      desc: "Delivered orders count करनेकेलिए"
    },
    {
      label: "Pending Orders",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending orders count करनेकेलिए"
    },
    {
      label: "Cancelled Orders",
      code: '=COUNTIF(E2:E100,"CANCELLED")',
      desc: "Cancelled orders count करनेकेलिए"
    },
    {
      label: "Returned Orders",
      code: '=COUNTIF(E2:E100,"RETURN")',
      desc: "Returned orders count करनेकेलिए"
    },
    {
      label: "Total Order Amount",
      code: '=SUM(F2:F100)',
      desc: "Total order amount calculate करनेकेलिए"
    },
    {
      label: "Highest Order Amount",
      code: '=MAX(F2:F100)',
      desc: "Highest order amount देखनेकेलिए"
    },
    {
      label: "Lowest Order Amount",
      code: '=MIN(F2:F100)',
      desc: "Lowest order amount देखनेकेलिए"
    },
    {
      label: "Average Order Amount",
      code: '=AVERAGE(F2:F100)',
      desc: "Average order amount calculate करनेकेलिए"
    },
    {
      label: "Order Status",
      code: '=IF(F2>=5000,"BIG ORDER","NORMAL")',
      desc: "Order category check करनेकेलिए"
    }
  ]
},

{
  id: 216,
  name: "RETURN PRODUCT REPORT",
  icon: "↩️",
  category: "Shop",
  color: "#d84315",
  colorRgb: "rgba(216,67,21,0.25)",
  use: "Returned products, refund और damaged items track करनेकेलिए",
  tags: ["RETURN","PRODUCT","REFUND","SHOP","DAMAGED"],
  formulas: [
    {
      label: "Total Returned Products",
      code: '=COUNTA(B2:B100)',
      desc: "Returned products count करनेकेलिए"
    },
    {
      label: "Refund Amount",
      code: '=SUM(E2:E100)',
      desc: "Refund amount calculate करनेकेलिए"
    },
    {
      label: "Damaged Products",
      code: '=COUNTIF(F2:F100,"DAMAGED")',
      desc: "Damaged products count करनेकेलिए"
    },
    {
      label: "Exchange Products",
      code: '=COUNTIF(F2:F100,"EXCHANGE")',
      desc: "Exchange products count करनेकेलिए"
    },
    {
      label: "Returned Orders",
      code: '=COUNTIF(G2:G100,"RETURNED")',
      desc: "Returned orders count करनेकेलिए"
    },
    {
      label: "Highest Refund",
      code: '=MAX(E2:E100)',
      desc: "Highest refund amount देखनेकेलिए"
    },
    {
      label: "Lowest Refund",
      code: '=MIN(E2:E100)',
      desc: "Lowest refund amount देखनेकेलिए"
    },
    {
      label: "Average Refund",
      code: '=AVERAGE(E2:E100)',
      desc: "Average refund amount calculate करनेकेलिए"
    },
    {
      label: "Return Percentage",
      code: '=(COUNTIF(G2:G100,"RETURNED")/COUNTA(B2:B100))*100',
      desc: "Return percentage calculate करनेकेलिए"
    },
    {
      label: "Return Status",
      code: '=IF(E2>=5000,"HIGH RETURN","NORMAL")',
      desc: "Return status check करनेकेलिए"
    }
  ]
},

{
  id: 217,
  name: "BARCODE REPORT",
  icon: "🏷️",
  category: "Shop",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Barcode products, scanning और inventory tracking करनेकेलिए",
  tags: ["BARCODE","PRODUCT","SCAN","SHOP","INVENTORY"],
  formulas: [
    {
      label: "Total Barcode Products",
      code: '=COUNTA(B2:B100)',
      desc: "Barcode products count करनेकेलिए"
    },
    {
      label: "Scanned Products",
      code: '=COUNTIF(E2:E100,"SCANNED")',
      desc: "Scanned products count करनेकेलिए"
    },
    {
      label: "Unscanned Products",
      code: '=COUNTIF(E2:E100,"UNSCANNED")',
      desc: "Unscanned products count करनेकेलिए"
    },
    {
      label: "Barcode Stock",
      code: '=SUM(F2:F100)',
      desc: "Barcode stock quantity calculate करनेकेलिए"
    },
    {
      label: "Sold Barcode Products",
      code: '=SUM(G2:G100)',
      desc: "Sold barcode products calculate करनेकेलिए"
    },
    {
      label: "Remaining Barcode Stock",
      code: '=SUM(F2:F100)-SUM(G2:G100)',
      desc: "Remaining barcode stock calculate करनेकेलिए"
    },
    {
      label: "Highest Barcode Stock",
      code: '=MAX(F2:F100)',
      desc: "Highest barcode stock देखनेकेलिए"
    },
    {
      label: "Lowest Barcode Stock",
      code: '=MIN(F2:F100)',
      desc: "Lowest barcode stock देखनेकेलिए"
    },
    {
      label: "Average Barcode Stock",
      code: '=AVERAGE(F2:F100)',
      desc: "Average barcode stock calculate करनेकेलिए"
    },
    {
      label: "Barcode Status",
      code: '=IF(F2<10,"LOW STOCK","AVAILABLE")',
      desc: "Barcode stock status check करनेकेलिए"
    }
  ]
},

{
  id: 218,
  name: "PAYMENT REPORT",
  icon: "💳",
  category: "Shop",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Customer payments, pending bills और transaction records manage करनेकेलिए",
  tags: ["PAYMENT","TRANSACTION","SHOP","CUSTOMER","BILL"],
  formulas: [
    {
      label: "Total Payments",
      code: '=SUM(E2:E100)',
      desc: "Total payments calculate करनेकेलिए"
    },
    {
      label: "Paid Amount",
      code: '=SUMIF(F2:F100,"PAID",E2:E100)',
      desc: "Paid amount calculate करनेकेलिए"
    },
    {
      label: "Pending Amount",
      code: '=SUMIF(F2:F100,"PENDING",E2:E100)',
      desc: "Pending amount calculate करनेकेलिए"
    },
    {
      label: "Cash Payments",
      code: '=SUMIF(G2:G100,"CASH",E2:E100)',
      desc: "Cash payments calculate करनेकेलिए"
    },
    {
      label: "Online Payments",
      code: '=SUMIF(G2:G100,"ONLINE",E2:E100)',
      desc: "Online payments calculate करनेकेलिए"
    },
    {
      label: "UPI Payments",
      code: '=SUMIF(G2:G100,"UPI",E2:E100)',
      desc: "UPI payments calculate करनेकेलिए"
    },
    {
      label: "Highest Payment",
      code: '=MAX(E2:E100)',
      desc: "Highest payment amount देखनेकेलिए"
    },
    {
      label: "Lowest Payment",
      code: '=MIN(E2:E100)',
      desc: "Lowest payment amount देखनेकेलिए"
    },
    {
      label: "Average Payment",
      code: '=AVERAGE(E2:E100)',
      desc: "Average payment calculate करनेकेलिए"
    },
    {
      label: "Payment Status",
      code: '=IF(E2>=10000,"HIGH PAYMENT","NORMAL")',
      desc: "Payment status check करनेकेलिए"
    }
  ]
},
   //hospital Reports  👇
   {
  id: 301,
  name: "PATIENT REPORT",
  icon: "🧑‍⚕️",
  category: "Hospital",
  color: "#00bcd4",
  colorRgb: "rgba(0,188,212,0.25)",
  use: "Patients details, treatment और records manage करनेकेलिए",
  tags: ["PATIENT","HOSPITAL","MEDICAL","TREATMENT","HEALTH"],
  formulas: [
    {
      label: "Total Patients",
      code: '=COUNTA(B2:B100)',
      desc: "Total patients count करनेकेलिए"
    },
    {
      label: "Male Patients",
      code: '=COUNTIF(E2:E100,"MALE")',
      desc: "Male patients count करनेकेलिए"
    },
    {
      label: "Female Patients",
      code: '=COUNTIF(E2:E100,"FEMALE")',
      desc: "Female patients count करनेकेलिए"
    },
    {
      label: "Admitted Patients",
      code: '=COUNTIF(F2:F100,"ADMITTED")',
      desc: "Admitted patients count करनेकेलिए"
    },
    {
      label: "Discharged Patients",
      code: '=COUNTIF(F2:F100,"DISCHARGED")',
      desc: "Discharged patients count करनेकेलिए"
    },
    {
      label: "Critical Patients",
      code: '=COUNTIF(G2:G100,"CRITICAL")',
      desc: "Critical patients count करनेकेलिए"
    },
    {
      label: "Recovered Patients",
      code: '=COUNTIF(G2:G100,"RECOVERED")',
      desc: "Recovered patients count करनेकेलिए"
    },
    {
      label: "Average Age",
      code: '=AVERAGE(H2:H100)',
      desc: "Patients average age calculate करनेकेलिए"
    },
    {
      label: "Treatment Cost",
      code: '=SUM(I2:I100)',
      desc: "Total treatment cost calculate करनेकेलिए"
    },
    {
      label: "Patient Status",
      code: '=IF(I2>=50000,"CRITICAL","NORMAL")',
      desc: "Patient medical status check करनेकेलिए"
    }
  ]
},

{
  id: 302,
  name: "DOCTOR REPORT",
  icon: "👨‍⚕️",
  category: "Hospital",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "Doctors details, attendance और appointments manage करनेकेलिए",
  tags: ["DOCTOR","HOSPITAL","MEDICAL","APPOINTMENT","STAFF"],
  formulas: [
    {
      label: "Total Doctors",
      code: '=COUNTA(B2:B100)',
      desc: "Total doctors count करनेकेलिए"
    },
    {
      label: "Available Doctors",
      code: '=COUNTIF(E2:E100,"AVAILABLE")',
      desc: "Available doctors count करनेकेलिए"
    },
    {
      label: "Unavailable Doctors",
      code: '=COUNTIF(E2:E100,"UNAVAILABLE")',
      desc: "Unavailable doctors count करनेकेलिए"
    },
    {
      label: "Specialist Doctors",
      code: '=COUNTIF(F2:F100,"SPECIALIST")',
      desc: "Specialist doctors count करनेकेलिए"
    },
    {
      label: "Total Appointments",
      code: '=SUM(G2:G100)',
      desc: "Doctor appointments calculate करनेकेलिए"
    },
    {
      label: "Highest Salary",
      code: '=MAX(H2:H100)',
      desc: "Highest doctor salary देखनेकेलिए"
    },
    {
      label: "Lowest Salary",
      code: '=MIN(H2:H100)',
      desc: "Lowest doctor salary देखनेकेलिए"
    },
    {
      label: "Average Salary",
      code: '=AVERAGE(H2:H100)',
      desc: "Average doctor salary calculate करनेकेलिए"
    },
    {
      label: "Attendance %",
      code: '=AVERAGE(I2:I100)',
      desc: "Doctors attendance percentage calculate करनेकेलिए"
    },
    {
      label: "Doctor Status",
      code: '=IF(I2>=80,"ACTIVE","LOW")',
      desc: "Doctor performance check करनेकेलिए"
    }
  ]
},

{
  id: 303,
  name: "APPOINTMENT REPORT",
  icon: "📅",
  category: "Hospital",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Patient appointments और schedules manage करनेकेलिए",
  tags: ["APPOINTMENT","PATIENT","DOCTOR","SCHEDULE","HOSPITAL"],
  formulas: [
    {
      label: "Total Appointments",
      code: '=COUNTA(B2:B100)',
      desc: "Total appointments count करनेकेलिए"
    },
    {
      label: "Completed Appointments",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed appointments count करनेकेलिए"
    },
    {
      label: "Pending Appointments",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending appointments count करनेकेलिए"
    },
    {
      label: "Cancelled Appointments",
      code: '=COUNTIF(E2:E100,"CANCELLED")',
      desc: "Cancelled appointments count करनेकेलिए"
    },
    {
      label: "Emergency Appointments",
      code: '=COUNTIF(F2:F100,"EMERGENCY")',
      desc: "Emergency appointments count करनेकेलिए"
    },
    {
      label: "Morning Appointments",
      code: '=COUNTIF(G2:G100,"MORNING")',
      desc: "Morning appointments count करनेकेलिए"
    },
    {
      label: "Evening Appointments",
      code: '=COUNTIF(G2:G100,"EVENING")',
      desc: "Evening appointments count करनेकेलिए"
    },
    {
      label: "Appointment Fees",
      code: '=SUM(H2:H100)',
      desc: "Appointment fees calculate करनेकेलिए"
    },
    {
      label: "Average Fees",
      code: '=AVERAGE(H2:H100)',
      desc: "Average appointment fees calculate करनेकेलिए"
    },
    {
      label: "Appointment Status",
      code: '=IF(H2>=1000,"VIP","NORMAL")',
      desc: "Appointment category check करनेकेलिए"
    }
  ]
},

{
  id: 304,
  name: "MEDICINE REPORT",
  icon: "💊",
  category: "Hospital",
  color: "#9c27b0",
  colorRgb: "rgba(156,39,176,0.25)",
  use: "Medicines stock, sales और expiry tracking करनेकेलिए",
  tags: ["MEDICINE","PHARMACY","STOCK","HOSPITAL","HEALTH"],
  formulas: [
    {
      label: "Total Medicines",
      code: '=COUNTA(B2:B100)',
      desc: "Total medicines count करनेकेलिए"
    },
    {
      label: "Available Medicines",
      code: '=SUM(E2:E100)',
      desc: "Available medicines stock calculate करनेकेलिए"
    },
    {
      label: "Sold Medicines",
      code: '=SUM(F2:F100)',
      desc: "Sold medicines quantity calculate करनेकेलिए"
    },
    {
      label: "Remaining Medicines",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Remaining medicines calculate करनेकेलिए"
    },
    {
      label: "Expired Medicines",
      code: '=COUNTIF(G2:G100,"EXPIRED")',
      desc: "Expired medicines count करनेकेलिए"
    },
    {
      label: "Low Stock Medicines",
      code: '=COUNTIF(E2:E100,"<10")',
      desc: "Low stock medicines count करनेकेलिए"
    },
    {
      label: "Medicine Value",
      code: '=SUM(H2:H100)',
      desc: "Medicine stock value calculate करनेकेलिए"
    },
    {
      label: "Highest Medicine Price",
      code: '=MAX(H2:H100)',
      desc: "Highest medicine price देखनेकेलिए"
    },
    {
      label: "Average Medicine Price",
      code: '=AVERAGE(H2:H100)',
      desc: "Average medicine price calculate करनेकेलिए"
    },
    {
      label: "Medicine Status",
      code: '=IF(E2<10,"LOW STOCK","AVAILABLE")',
      desc: "Medicine stock status check करनेकेलिए"
    }
  ]
},

{
  id: 305,
  name: "OPD REPORT",
  icon: "🏥",
  category: "Hospital",
  color: "#f44336",
  colorRgb: "rgba(244,67,54,0.25)",
  use: "OPD patients, doctor visits और outpatient records manage करनेकेलिए",
  tags: ["OPD","PATIENT","DOCTOR","OUTPATIENT","HOSPITAL"],
  formulas: [
    {
      label: "Total OPD Patients",
      code: '=COUNTA(B2:B100)',
      desc: "Total OPD patients count करनेकेलिए"
    },
    {
      label: "New OPD Patients",
      code: '=COUNTIF(E2:E100,"NEW")',
      desc: "New OPD patients count करनेकेलिए"
    },
    {
      label: "Old OPD Patients",
      code: '=COUNTIF(E2:E100,"OLD")',
      desc: "Old OPD patients count करनेकेलिए"
    },
    {
      label: "Emergency OPD",
      code: '=COUNTIF(F2:F100,"EMERGENCY")',
      desc: "Emergency OPD patients count करनेकेलिए"
    },
    {
      label: "Consultation Fees",
      code: '=SUM(G2:G100)',
      desc: "Consultation fees calculate करनेकेलिए"
    },
    {
      label: "Highest Fees",
      code: '=MAX(G2:G100)',
      desc: "Highest consultation fees देखनेकेलिए"
    },
    {
      label: "Lowest Fees",
      code: '=MIN(G2:G100)',
      desc: "Lowest consultation fees देखनेकेलिए"
    },
    {
      label: "Average Fees",
      code: '=AVERAGE(G2:G100)',
      desc: "Average consultation fees calculate करनेकेलिए"
    },
    {
      label: "Doctor Visits",
      code: '=COUNTA(H2:H100)',
      desc: "Doctor visits count करनेकेलिए"
    },
    {
      label: "OPD Status",
      code: '=IF(G2>=1000,"HIGH","NORMAL")',
      desc: "OPD patient status check करनेकेलिए"
    }
  ]
},
{
  id: 306,
  name: "IPD REPORT",
  icon: "🛏️",
  category: "Hospital",
  color: "#1565c0",
  colorRgb: "rgba(21,101,192,0.25)",
  use: "Indoor patients, room allocation और treatment manage करनेकेलिए",
  tags: ["IPD","PATIENT","ROOM","TREATMENT","HOSPITAL"],
  formulas: [
    {
      label: "Total IPD Patients",
      code: '=COUNTA(B2:B100)',
      desc: "Total IPD patients count करनेकेलिए"
    },
    {
      label: "Occupied Beds",
      code: '=COUNTIF(E2:E100,"OCCUPIED")',
      desc: "Occupied beds count करनेकेलिए"
    },
    {
      label: "Available Beds",
      code: '=COUNTIF(E2:E100,"AVAILABLE")',
      desc: "Available beds count करनेकेलिए"
    },
    {
      label: "Critical Patients",
      code: '=COUNTIF(F2:F100,"CRITICAL")',
      desc: "Critical patients count करनेकेलिए"
    },
    {
      label: "Recovered Patients",
      code: '=COUNTIF(F2:F100,"RECOVERED")',
      desc: "Recovered patients count करनेकेलिए"
    },
    {
      label: "Treatment Charges",
      code: '=SUM(G2:G100)',
      desc: "Treatment charges calculate करनेकेलिए"
    },
    {
      label: "Room Charges",
      code: '=SUM(H2:H100)',
      desc: "Room charges calculate करनेकेलिए"
    },
    {
      label: "Total Hospital Stay",
      code: '=SUM(I2:I100)',
      desc: "Total patient stay days calculate करनेकेलिए"
    },
    {
      label: "Average Stay",
      code: '=AVERAGE(I2:I100)',
      desc: "Average stay days calculate करनेकेलिए"
    },
    {
      label: "IPD Status",
      code: '=IF(G2>=50000,"CRITICAL","NORMAL")',
      desc: "IPD patient status check करनेकेलिए"
    }
  ]
},

{
  id: 307,
  name: "LAB TEST REPORT",
  icon: "🧪",
  category: "Hospital",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Lab tests, reports और medical diagnostics manage करनेकेलिए",
  tags: ["LAB","TEST","REPORT","MEDICAL","HOSPITAL"],
  formulas: [
    {
      label: "Total Tests",
      code: '=COUNTA(B2:B100)',
      desc: "Total lab tests count करनेकेलिए"
    },
    {
      label: "Completed Tests",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed tests count करनेकेलिए"
    },
    {
      label: "Pending Tests",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending tests count करनेकेलिए"
    },
    {
      label: "Positive Reports",
      code: '=COUNTIF(F2:F100,"POSITIVE")',
      desc: "Positive reports count करनेकेलिए"
    },
    {
      label: "Negative Reports",
      code: '=COUNTIF(F2:F100,"NEGATIVE")',
      desc: "Negative reports count करनेकेलिए"
    },
    {
      label: "Test Fees",
      code: '=SUM(G2:G100)',
      desc: "Total lab fees calculate करनेकेलिए"
    },
    {
      label: "Highest Test Fee",
      code: '=MAX(G2:G100)',
      desc: "Highest test fee देखनेकेलिए"
    },
    {
      label: "Lowest Test Fee",
      code: '=MIN(G2:G100)',
      desc: "Lowest test fee देखनेकेलिए"
    },
    {
      label: "Average Test Fee",
      code: '=AVERAGE(G2:G100)',
      desc: "Average test fee calculate करनेकेलिए"
    },
    {
      label: "Lab Status",
      code: '=IF(G2>=5000,"ADVANCED","NORMAL")',
      desc: "Lab test category check करनेकेलिए"
    }
  ]
},

{
  id: 308,
  name: "BLOOD REPORT",
  icon: "🩸",
  category: "Hospital",
  color: "#c62828",
  colorRgb: "rgba(198,40,40,0.25)",
  use: "Blood groups, blood units और donor records manage करनेकेलिए",
  tags: ["BLOOD","DONOR","PATIENT","MEDICAL","HOSPITAL"],
  formulas: [
    {
      label: "Total Blood Units",
      code: '=SUM(E2:E100)',
      desc: "Total blood units calculate करनेकेलिए"
    },
    {
      label: "A+ Blood Units",
      code: '=SUMIF(B2:B100,"A+",E2:E100)',
      desc: "A+ blood units calculate करनेकेलिए"
    },
    {
      label: "B+ Blood Units",
      code: '=SUMIF(B2:B100,"B+",E2:E100)',
      desc: "B+ blood units calculate करनेकेलिए"
    },
    {
      label: "O+ Blood Units",
      code: '=SUMIF(B2:B100,"O+",E2:E100)',
      desc: "O+ blood units calculate करनेकेलिए"
    },
    {
      label: "AB+ Blood Units",
      code: '=SUMIF(B2:B100,"AB+",E2:E100)',
      desc: "AB+ blood units calculate करनेकेलिए"
    },
    {
      label: "Used Blood Units",
      code: '=SUM(F2:F100)',
      desc: "Used blood units calculate करनेकेलिए"
    },
    {
      label: "Remaining Blood Units",
      code: '=SUM(E2:E100)-SUM(F2:F100)',
      desc: "Remaining blood units calculate करनेकेलिए"
    },
    {
      label: "Blood Donors",
      code: '=COUNTA(G2:G100)',
      desc: "Blood donors count करनेकेलिए"
    },
    {
      label: "Emergency Blood Requests",
      code: '=COUNTIF(H2:H100,"EMERGENCY")',
      desc: "Emergency blood requests count करनेकेलिए"
    },
    {
      label: "Blood Stock Status",
      code: '=IF(E2<10,"LOW STOCK","AVAILABLE")',
      desc: "Blood stock status check करनेकेलिए"
    }
  ]
},

{
  id: 309,
  name: "OPERATION REPORT",
  icon: "⚕️",
  category: "Hospital",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Operations, surgery details और doctor performance manage करनेकेलिए",
  tags: ["OPERATION","SURGERY","DOCTOR","PATIENT","HOSPITAL"],
  formulas: [
    {
      label: "Total Operations",
      code: '=COUNTA(B2:B100)',
      desc: "Total operations count करनेकेलिए"
    },
    {
      label: "Successful Operations",
      code: '=COUNTIF(E2:E100,"SUCCESS")',
      desc: "Successful operations count करनेकेलिए"
    },
    {
      label: "Pending Operations",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending operations count करनेकेलिए"
    },
    {
      label: "Emergency Operations",
      code: '=COUNTIF(F2:F100,"EMERGENCY")',
      desc: "Emergency operations count करनेकेलिए"
    },
    {
      label: "Operation Fees",
      code: '=SUM(G2:G100)',
      desc: "Operation fees calculate करनेकेलिए"
    },
    {
      label: "Highest Operation Cost",
      code: '=MAX(G2:G100)',
      desc: "Highest operation cost देखनेकेलिए"
    },
    {
      label: "Lowest Operation Cost",
      code: '=MIN(G2:G100)',
      desc: "Lowest operation cost देखनेकेलिए"
    },
    {
      label: "Average Operation Cost",
      code: '=AVERAGE(G2:G100)',
      desc: "Average operation cost calculate करनेकेलिए"
    },
    {
      label: "Operation Doctors",
      code: '=COUNTA(H2:H100)',
      desc: "Operation doctors count करनेकेलिए"
    },
    {
      label: "Operation Status",
      code: '=IF(G2>=100000,"CRITICAL","NORMAL")',
      desc: "Operation status check करनेकेलिए"
    }
  ]
},
{
  id: 310,
  name: "DISCHARGE REPORT",
  icon: "📄",
  category: "Hospital",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Patient discharge details और billing records manage करनेकेलिए",
  tags: ["DISCHARGE","PATIENT","BILL","HOSPITAL","MEDICAL"],
  formulas: [
    {
      label: "Total Discharges",
      code: '=COUNTA(B2:B100)',
      desc: "Total discharged patients count करनेकेलिए"
    },
    {
      label: "Recovered Patients",
      code: '=COUNTIF(E2:E100,"RECOVERED")',
      desc: "Recovered patients count करनेकेलिए"
    },
    {
      label: "Critical Discharges",
      code: '=COUNTIF(E2:E100,"CRITICAL")',
      desc: "Critical discharges count करनेकेलिए"
    },
    {
      label: "Total Bill Amount",
      code: '=SUM(F2:F100)',
      desc: "Discharge bill amount calculate करनेकेलिए"
    },
    {
      label: "Paid Bills",
      code: '=COUNTIF(G2:G100,"PAID")',
      desc: "Paid bills count करनेकेलिए"
    },
    {
      label: "Pending Bills",
      code: '=COUNTIF(G2:G100,"PENDING")',
      desc: "Pending bills count करनेकेलिए"
    },
    {
      label: "Highest Bill",
      code: '=MAX(F2:F100)',
      desc: "Highest bill amount viewing केलिए"
    },
    {
      label: "Lowest Bill",
      code: '=MIN(F2:F100)',
      desc: "Lowest bill amount viewing केलिए"
    },
    {
      label: "Average Bill",
      code: '=AVERAGE(F2:F100)',
      desc: "Average discharge bill calculate करनेकेलिए"
    },
    {
      label: "Discharge Status",
      code: '=IF(F2>=50000,"HIGH BILL","NORMAL")',
      desc: "Discharge billing status check करनेकेलिए"
    }
  ]
},
{
  id: 311,
  name: "EMERGENCY REPORT",
  icon: "🚑",
  category: "Hospital",
  color: "#d50000",
  colorRgb: "rgba(213,0,0,0.25)",
  use: "Emergency patients, ambulance और urgent cases manage करनेकेलिए",
  tags: ["EMERGENCY","AMBULANCE","PATIENT","HOSPITAL","URGENT"],
  formulas: [
    {
      label: "Total Emergency Cases",
      code: '=COUNTA(B2:B100)',
      desc: "Total emergency cases count करनेकेलिए"
    },
    {
      label: "Critical Cases",
      code: '=COUNTIF(E2:E100,"CRITICAL")',
      desc: "Critical cases count करनेकेलिए"
    },
    {
      label: "Stable Cases",
      code: '=COUNTIF(E2:E100,"STABLE")',
      desc: "Stable cases count करनेकेलिए"
    },
    {
      label: "Ambulance Used",
      code: '=COUNTIF(F2:F100,"YES")',
      desc: "Ambulance used count करनेकेलिए"
    },
    {
      label: "Emergency Doctors",
      code: '=COUNTA(G2:G100)',
      desc: "Emergency doctors count करनेकेलिए"
    },
    {
      label: "Emergency Fees",
      code: '=SUM(H2:H100)',
      desc: "Emergency treatment fees calculate करनेकेलिए"
    },
    {
      label: "Highest Emergency Bill",
      code: '=MAX(H2:H100)',
      desc: "Highest emergency bill देखनेकेलिए"
    },
    {
      label: "Lowest Emergency Bill",
      code: '=MIN(H2:H100)',
      desc: "Lowest emergency bill देखनेकेलिए"
    },
    {
      label: "Average Emergency Bill",
      code: '=AVERAGE(H2:H100)',
      desc: "Average emergency bill calculate करनेकेलिए"
    },
    {
      label: "Emergency Status",
      code: '=IF(H2>=100000,"VERY CRITICAL","NORMAL")',
      desc: "Emergency status check करनेकेलिए"
    }
  ]
},

{
  id: 312,
  name: "PHARMACY REPORT",
  icon: "💉",
  category: "Hospital",
  color: "#2e7d32",
  colorRgb: "rgba(46,125,50,0.25)",
  use: "Pharmacy medicines, sales और stock records manage करनेकेलिए",
  tags: ["PHARMACY","MEDICINE","SALES","STOCK","HOSPITAL"],
  formulas: [
    {
      label: "Total Medicines",
      code: '=COUNTA(B2:B100)',
      desc: "Total pharmacy medicines count करनेकेलिए"
    },
    {
      label: "Medicine Sales",
      code: '=SUM(E2:E100)',
      desc: "Medicine sales calculate करनेकेलिए"
    },
    {
      label: "Medicine Purchase",
      code: '=SUM(F2:F100)',
      desc: "Medicine purchase calculate करनेकेलिए"
    },
    {
      label: "Remaining Stock",
      code: '=SUM(G2:G100)',
      desc: "Remaining medicine stock calculate करनेकेलिए"
    },
    {
      label: "Expired Medicines",
      code: '=COUNTIF(H2:H100,"EXPIRED")',
      desc: "Expired medicines count करनेकेलिए"
    },
    {
      label: "Low Stock Medicines",
      code: '=COUNTIF(G2:G100,"<10")',
      desc: "Low stock medicines count करनेकेलिए"
    },
    {
      label: "Highest Medicine Sale",
      code: '=MAX(E2:E100)',
      desc: "Highest medicine sale देखनेकेलिए"
    },
    {
      label: "Lowest Medicine Sale",
      code: '=MIN(E2:E100)',
      desc: "Lowest medicine sale देखनेकेलिए"
    },
    {
      label: "Average Medicine Sale",
      code: '=AVERAGE(E2:E100)',
      desc: "Average medicine sale calculate करनेकेलिए"
    },
    {
      label: "Pharmacy Status",
      code: '=IF(G2<10,"RESTOCK REQUIRED","AVAILABLE")',
      desc: "Pharmacy stock status check करनेकेलिए"
    }
  ]
},

{
  id: 313,
  name: "MEDICAL BILL REPORT",
  icon: "🧾",
  category: "Hospital",
  color: "#0277bd",
  colorRgb: "rgba(2,119,189,0.25)",
  use: "Hospital bills, patient payments और pending dues manage करनेकेलिए",
  tags: ["MEDICAL","BILL","PAYMENT","PATIENT","HOSPITAL"],
  formulas: [
    {
      label: "Total Bills",
      code: '=COUNTA(B2:B100)',
      desc: "Total medical bills count करनेकेलिए"
    },
    {
      label: "Total Bill Amount",
      code: '=SUM(E2:E100)',
      desc: "Total medical bill amount calculate करनेकेलिए"
    },
    {
      label: "Paid Bills",
      code: '=COUNTIF(F2:F100,"PAID")',
      desc: "Paid bills count करनेकेलिए"
    },
    {
      label: "Pending Bills",
      code: '=COUNTIF(F2:F100,"PENDING")',
      desc: "Pending bills count करनेकेलिए"
    },
    {
      label: "Insurance Bills",
      code: '=COUNTIF(G2:G100,"INSURANCE")',
      desc: "Insurance bills count करनेकेलिए"
    },
    {
      label: "Cash Payments",
      code: '=SUMIF(H2:H100,"CASH",E2:E100)',
      desc: "Cash payments calculate करनेकेलिए"
    },
    {
      label: "Online Payments",
      code: '=SUMIF(H2:H100,"ONLINE",E2:E100)',
      desc: "Online payments calculate करनेकेलिए"
    },
    {
      label: "Highest Bill",
      code: '=MAX(E2:E100)',
      desc: "Highest medical bill देखनेकेलिए"
    },
    {
      label: "Average Bill",
      code: '=AVERAGE(E2:E100)',
      desc: "Average medical bill calculate करनेकेलिए"
    },
    {
      label: "Billing Status",
      code: '=IF(E2>=100000,"HIGH BILL","NORMAL")',
      desc: "Medical billing status check करनेकेलिए"
    }
  ]
},

{
  id: 314,
  name: "STAFF REPORT",
  icon: "👨‍💼",
  category: "Hospital",
  color: "#5e35b1",
  colorRgb: "rgba(94,53,177,0.25)",
  use: "Hospital staff attendance, salary और performance manage करनेकेलिए",
  tags: ["STAFF","HOSPITAL","SALARY","ATTENDANCE","WORK"],
  formulas: [
    {
      label: "Total Staff",
      code: '=COUNTA(B2:B100)',
      desc: "Total staff count करनेकेलिए"
    },
    {
      label: "Present Staff",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Present staff count करनेकेलिए"
    },
    {
      label: "Absent Staff",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent staff count करनेकेलिए"
    },
    {
      label: "Staff Salary",
      code: '=SUM(F2:F100)',
      desc: "Total staff salary calculate करनेकेलिए"
    },
    {
      label: "Highest Salary",
      code: '=MAX(F2:F100)',
      desc: "Highest staff salary देखनेकेलिए"
    },
    {
      label: "Lowest Salary",
      code: '=MIN(F2:F100)',
      desc: "Lowest staff salary देखनेकेलिए"
    },
    {
      label: "Average Salary",
      code: '=AVERAGE(F2:F100)',
      desc: "Average staff salary calculate करनेकेलिए"
    },
    {
      label: "Night Shift Staff",
      code: '=COUNTIF(G2:G100,"NIGHT")',
      desc: "Night shift staff count करनेकेलिए"
    },
    {
      label: "Day Shift Staff",
      code: '=COUNTIF(G2:G100,"DAY")',
      desc: "Day shift staff count करनेकेलिए"
    },
    {
      label: "Staff Performance",
      code: '=IF(H2>=80,"GOOD","LOW")',
      desc: "Staff performance status check करनेकेलिए"
    }
  ]
},

{
  id: 315,
  name: "NURSE REPORT",
  icon: "👩‍⚕️",
  category: "Hospital",
  color: "#00838f",
  colorRgb: "rgba(0,131,143,0.25)",
  use: "Nurses attendance, duty और patient care records manage करनेकेलिए",
  tags: ["NURSE","HOSPITAL","PATIENT","ATTENDANCE","CARE"],
  formulas: [
    {
      label: "Total Nurses",
      code: '=COUNTA(B2:B100)',
      desc: "Total nurses count करनेकेलिए"
    },
    {
      label: "Present Nurses",
      code: '=COUNTIF(E2:E100,"PRESENT")',
      desc: "Present nurses count करनेकेलिए"
    },
    {
      label: "Absent Nurses",
      code: '=COUNTIF(E2:E100,"ABSENT")',
      desc: "Absent nurses count करनेकेलिए"
    },
    {
      label: "Night Duty Nurses",
      code: '=COUNTIF(F2:F100,"NIGHT")',
      desc: "Night duty nurses count करनेकेलिए"
    },
    {
      label: "Day Duty Nurses",
      code: '=COUNTIF(F2:F100,"DAY")',
      desc: "Day duty nurses count करनेकेलिए"
    },
    {
      label: "Patient Handled",
      code: '=SUM(G2:G100)',
      desc: "Handled patients calculate करनेकेलिए"
    },
    {
      label: "Nurse Salary",
      code: '=SUM(H2:H100)',
      desc: "Total nurse salary calculate करनेकेलिए"
    },
    {
      label: "Highest Salary",
      code: '=MAX(H2:H100)',
      desc: "Highest nurse salary देखनेकेलिए"
    },
    {
      label: "Average Salary",
      code: '=AVERAGE(H2:H100)',
      desc: "Average nurse salary calculate करनेकेलिए"
    },
    {
      label: "Nurse Status",
      code: '=IF(H2>=40000,"SENIOR","JUNIOR")',
      desc: "Nurse role status check करनेकेलिए"
    }
  ]
},

 //hospital Reports  👆


































   
  // Finance REPORT  👇
{
    id: 8,
    name: "LOAN REPORT",
    icon: "🏦",
    category: "Finance",
    color: "#00ff9d",
    colorRgb: "rgba(0,255,157,0.3)",
    use: "Bank loan की EMI, interest और total amount calculate करने के लिए",
    tags: ["PMT","IPMT","PPMT","FV"],
    formulas: [
      { label: "EMI Calculation", code: "=PMT(rate/12,nper,-pv)", desc: "Monthly EMI calculate करने के लिए" },
      { label: "Interest Payment", code: "=IPMT(rate/12,per,nper,-pv)", desc: "किसी installment का interest part" },
      { label: "Principal Payment", code: "=PPMT(rate/12,per,nper,-pv)", desc: "किसी installment का principal part" },
      { label: "Total Payment", code: "=PMT(rate/12,nper,-pv)*nper", desc: "Total loan repayment amount" },
      { label: "Total Interest", code: "=PMT(rate/12,nper,-pv)*nper-pv", desc: "Total interest paid over loan period" },
      { label: "Future Value", code: "=FV(rate/12,nper,-pmt)", desc: "Investment की future value" },
    ]
  },
  {
    id: 13,
    name: "BUDGET REPORT",
    icon: "💰",
    category: "Finance",
    color: "#ff4f8b",
    colorRgb: "rgba(255,79,139,0.3)",
    use: "Monthly budget planning, expenses tracking और savings calculate करने के लिए",
    tags: ["SUM","SUMIF","IF","AVERAGE"],
    formulas: [
      { label: "Total Income", code: "=SUM(B2:B10)", desc: "सभी income sources का total" },
      { label: "Total Expenses", code: "=SUM(C2:C20)", desc: "सभी expenses का total" },
      { label: "Monthly Savings", code: "=B1-C1", desc: "Income - Expenses = Savings" },
      { label: "Expense %", code: "=C1/B1*100", desc: "Income का कितना % खर्च हुआ" },
      { label: "Category Expense", code: '=SUMIF(A2:A20,"Food",C2:C20)', desc: "किसी category पर कुल खर्च" },
      { label: "Over Budget?", code: '=IF(C1>B1,"OVER BUDGET!","SAFE")', desc: "Budget से ज्यादा खर्च हो गया?" },
    ]
  },
  {
    id: 14,
    name: "TAX REPORT",
    icon: "🧮",
    category: "Finance / Government",
    color: "#a8ff3e",
    colorRgb: "rgba(168,255,62,0.3)",
    use: "Income tax, GST, TDS और net taxable income calculate करने के लिए",
    tags: ["IF","ROUND","SUM","VLOOKUP"],
    formulas: [
      { label: "Taxable Income", code: "=B1-B2-B3", desc: "Gross income - deductions" },
      { label: "Income Tax (30%)", code: '=IF(B4>10,00000,B4*30%,IF(B4>5,00000,B4*20%,0))', desc: "Slab के basis पर income tax" },
      { label: "GST Amount", code: "=B2*18%", desc: "18% GST calculate करना" },
      { label: "CGST + SGST", code: "=B2*9%", desc: "9% CGST और 9% SGST अलग-अलग" },
      { label: "TDS Deduction (10%)", code: "=B1*10%", desc: "10% TDS deduction" },
      { label: "Net Take Home", code: "=B1-C1-D1", desc: "सभी taxes के बाद net income" },
    ]
  },
  {
  id: 7,
  name: "FEE COLLECTION REPORT",
  icon: "💰",
  category: "Finance",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "School fee collect, pending fee और monthly income देखने के लिए",
  tags: ["SUM","SUMIF","COUNTIF","FEE","PAYMENT"],
  formulas: [
    {
      label: "Total Fee Collected",
      code: '=SUM(C2:C100)',
      desc: "Total collected fee calculate करने के लिए"
    },
    {
      label: "Pending Fee",
      code: '=SUM(D2:D100)',
      desc: "Pending fee calculate करने के लिए"
    },
    {
      label: "Paid Students",
      code: '=COUNTIF(E2:E100,"PAID")',
      desc: "Paid students count करने के लिए"
    },
    {
      label: "Unpaid Students",
      code: '=COUNTIF(E2:E100,"UNPAID")',
      desc: "Unpaid students count करने के लिए"
    },
    {
      label: "Monthly Collection",
      code: '=SUMIF(A2:A100,"January",C2:C100)',
      desc: "Month wise fee collection देखने के लिए"
    }
  ]
},
{
  id: 11,
  name: "FEE COLLECTION REPORT",
  icon: "💵",
  category: "Finance",
  color: "#4caf50",
  colorRgb: "rgba(76,175,80,0.25)",
  use: "School fee collection और payment records manage करने के लिए",
  tags: ["SUM","SUMIF","PAYMENT","FEE","COLLECTION"],
  formulas: [
    {
      label: "Total Collected Fee",
      code: '=SUM(C2:C100)',
      desc: "Total collected fee calculate करने के लिए"
    },
    {
      label: "Paid Students",
      code: '=COUNTIF(D2:D100,"PAID")',
      desc: "Paid students count करने के लिए"
    },
    {
      label: "Unpaid Students",
      code: '=COUNTIF(D2:D100,"UNPAID")',
      desc: "Unpaid students count करने के लिए"
    },
    {
      label: "Monthly Fee Collection",
      code: '=SUMIF(A2:A100,"January",C2:C100)',
      desc: "Month wise fee collection देखने के लिए"
    }
  ]
},
{
  id: 12,
  name: "PENDING FEE REPORT",
  icon: "⏳",
  category: "Finance",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Pending fee students और बाकी amount track करने के लिए",
  tags: ["SUM","IF","PENDING","FEE","BALANCE"],
  formulas: [
    {
      label: "Pending Amount",
      code: '=C2-B2',
      desc: "बाकी fee amount निकालने के लिए"
    },
    {
      label: "Total Pending Fee",
      code: '=SUM(D2:D100)',
      desc: "Total pending fee calculate करने के लिए"
    },
    {
      label: "Pending Students",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending students count करने के लिए"
    },
    {
      label: "Payment Status",
      code: '=IF(D2=0,"PAID","PENDING")',
      desc: "Fee paid है या pending देखने के लिए"
    }
  ]
},
{
  id: 13,
  name: "MONTHLY FEE REPORT",
  icon: "📆",
  category: "Finance",
  color: "#673ab7",
  colorRgb: "rgba(103,58,183,0.25)",
  use: "हर महीने की fee income और collection देखने के लिए",
  tags: ["SUMIF","MONTH","FEE","INCOME","REPORT"],
  formulas: [
    {
      label: "January Collection",
      code: '=SUMIF(A2:A100,"January",C2:C100)',
      desc: "January month fee collection देखने के लिए"
    },
    {
      label: "February Collection",
      code: '=SUMIF(A2:A100,"February",C2:C100)',
      desc: "February month fee collection देखने के लिए"
    },
    {
      label: "March Collection",
      code: '=SUMIF(A2:A100,"March",C2:C100)',
      desc: "March month fee collection देखने के लिए"
    },
    {
      label: "Total Year Collection",
      code: '=SUM(C2:C100)',
      desc: "पूरे साल की fee collection देखने के लिए"
    }
  ]
},
{
  id: 15,
  name: "STAFF SALARY REPORT",
  icon: "💼",
  category: "Finance",
  color: "#795548",
  colorRgb: "rgba(121,85,72,0.25)",
  use: "School staff की salary, bonus और deductions calculate करने के लिए",
  tags: ["SUM","IF","SALARY","STAFF","BONUS"],
  formulas: [
    {
      label: "Net Salary",
      code: '=B2-C2+D2',
      desc: "Salary - deduction + bonus calculate करने के लिए"
    },
    {
      label: "Total Salary",
      code: '=SUM(B2:B100)',
      desc: "Total staff salary calculate करने के लिए"
    },
    {
      label: "Bonus Amount",
      code: '=IF(B2>=50000,5000,2000)',
      desc: "Salary के basis पर bonus देने के लिए"
    },
    {
      label: "Deduction Amount",
      code: '=B2*10%',
      desc: "10% deduction calculate करने के लिए"
    }
  ]
},
{
  id: 25,
  name: "SCHOLARSHIP REPORT",
  icon: "🎓",
  category: "Finance",
  color: "#cddc39",
  colorRgb: "rgba(205,220,57,0.25)",
  use: "Scholarship students और scholarship amount track करने के लिए",
  tags: ["SUM","COUNTIF","SCHOLARSHIP","STUDENT","AMOUNT"],
  formulas: [
    {
      label: "Scholarship Students",
      code: '=COUNTIF(B2:B100,"YES")',
      desc: "Scholarship students count करने के लिए"
    },
    {
      label: "Total Scholarship Amount",
      code: '=SUM(C2:C100)',
      desc: "Total scholarship amount calculate करने के लिए"
    },
    {
      label: "Pending Scholarship",
      code: '=COUNTIF(D2:D100,"PENDING")',
      desc: "Pending scholarship records देखने के लिए"
    }
  ]
},
{
  id: 30,
  name: "SALARY REPORT",
  icon: "💰",
  category: "Finance",
  color: "#27ae60",
  colorRgb: "rgba(39,174,96,0.25)",
  use: "Employee salary, bonus और deductions manage करने के लिए",
  tags: ["SUM","IF","SALARY","BONUS","DEDUCTION"],
  formulas: [
    {
      label: "Net Salary",
      code: '=B2-C2+D2',
      desc: "Salary - deduction + bonus calculate करने के लिए"
    },
    {
      label: "Total Salary",
      code: '=SUM(B2:B100)',
      desc: "Total salary calculate करने के लिए"
    },
    {
      label: "Bonus",
      code: '=IF(B2>=50000,5000,2000)',
      desc: "Salary के basis पर bonus देने के लिए"
    }
  ]
},
{
  id: 38,
  name: "INVOICE REPORT",
  icon: "🧾",
  category: "Finance",
  color: "#f39c12",
  colorRgb: "rgba(243,156,18,0.25)",
  use: "Invoices और payment status manage करने के लिए",
  tags: ["SUM","IF","INVOICE","PAYMENT","AMOUNT"],
  formulas: [
    {
      label: "Total Invoice Amount",
      code: '=SUM(C2:C100)',
      desc: "Total invoice amount calculate करने के लिए"
    },
    {
      label: "Paid Invoices",
      code: '=COUNTIF(D2:D100,"PAID")',
      desc: "Paid invoices count करने के लिए"
    },
    {
      label: "Pending Invoices",
      code: '=COUNTIF(D2:D100,"PENDING")',
      desc: "Pending invoices count करने के लिए"
    }
  ]
},
{
  id: 39,
  name: "EXPENSE REPORT",
  icon: "💸",
  category: "Finance",
  color: "#c0392b",
  colorRgb: "rgba(192,57,43,0.25)",
  use: "Office expenses और monthly खर्च track करने के लिए",
  tags: ["SUM","EXPENSE","OFFICE","COST","MONTHLY"],
  formulas: [
    {
      label: "Total Expense",
      code: '=SUM(C2:C100)',
      desc: "Total expense calculate करने के लिए"
    },
    {
      label: "Highest Expense",
      code: '=MAX(C2:C100)',
      desc: "Highest expense देखने के लिए"
    },
    {
      label: "Lowest Expense",
      code: '=MIN(C2:C100)',
      desc: "Lowest expense देखने के लिए"
    }
  ]
},
{
  id: 49,
  name: "GST REPORT",
  icon: "🧾",
  category: "Finance",
  color: "#039be5",
  colorRgb: "rgba(3,155,229,0.25)",
  use: "GST tax amount और taxable sales calculate करने के लिए",
  tags: ["GST","TAX","SUM","FINANCE","BILL"],
  formulas: [
    {
      label: "GST Amount",
      code: '=C2*18%',
      desc: "18% GST calculate करने के लिए"
    },
    {
      label: "Total GST",
      code: '=SUM(D2:D100)',
      desc: "Total GST amount calculate करने के लिए"
    }
  ]
},
{
  id: 50,
  name: "BILL REPORT",
  icon: "💵",
  category: "Finance",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Bills generate और bill payments manage करने के लिए",
  tags: ["SUM","BILL","PAYMENT","TOTAL","SHOP"],
  formulas: [
    {
      label: "Bill Total",
      code: '=SUM(C2:C10)',
      desc: "Bill total calculate करने के लिए"
    },
    {
      label: "Pending Bills",
      code: '=COUNTIF(D2:D100,"PENDING")',
      desc: "Pending bills count करने के लिए"
    }
  ]
},
   // Finance REPORT 👆

  // Transport REPORT👇
{
  id: 22,
  name: "TRANSPORT REPORT",
  icon: "🚌",
  category: "Transport",
  color: "#ff6f00",
  colorRgb: "rgba(255,111,0,0.25)",
  use: "School transport students और bus fee records manage करने के लिए",
  tags: ["COUNTIF","SUM","TRANSPORT","BUS","FEE"],
  formulas: [
    {
      label: "Transport Students",
      code: '=COUNTIF(B2:B100,"YES")',
      desc: "Transport students count करने के लिए"
    },
    {
      label: "Bus Fee Collection",
      code: '=SUM(C2:C100)',
      desc: "Bus fee collection calculate करने के लिए"
    },
    {
      label: "Pending Bus Fee",
      code: '=COUNTIF(D2:D100,"PENDING")',
      desc: "Pending transport fee देखने के लिए"
    }
  ]
},
{
  id: 23,
  name: "BUS ROUTE REPORT",
  icon: "🚍",
  category: "Transport",
  color: "#2196f3",
  colorRgb: "rgba(33,150,243,0.25)",
  use: "Bus routes और route wise students track करने के लिए",
  tags: ["COUNTIF","ROUTE","BUS","STUDENT","TRACK"],
  formulas: [
    {
      label: "Route 1 Students",
      code: '=COUNTIF(B2:B100,"Route 1")',
      desc: "Route 1 students count करने के लिए"
    },
    {
      label: "Route 2 Students",
      code: '=COUNTIF(B2:B100,"Route 2")',
      desc: "Route 2 students count करने के लिए"
    },
    {
      label: "Total Routes",
      code: '=COUNTA(UNIQUE(B2:B100))',
      desc: "Total unique routes count करने के लिए"
    }
  ]
},
// Transport REPORT 👆

 // Office REPORT 👇
{
  id: 29,
  name: "EMPLOYEE ATTENDANCE REPORT",
  icon: "🧑‍💼",
  category: "Office",
  color: "#00b894",
  colorRgb: "rgba(0,184,148,0.25)",
  use: "Employees की attendance और working days track करने के लिए",
  tags: ["COUNTIF","ATTENDANCE","EMPLOYEE","OFFICE","PRESENT"],
  formulas: [
    {
      label: "Present Employees",
      code: '=COUNTIF(C2:C100,"PRESENT")',
      desc: "Present employees count करने के लिए"
    },
    {
      label: "Absent Employees",
      code: '=COUNTIF(C2:C100,"ABSENT")',
      desc: "Absent employees count करने के लिए"
    },
    {
      label: "Attendance Percentage",
      code: '=COUNTIF(C2:C100,"PRESENT")/COUNTA(C2:C100)*100',
      desc: "Attendance percentage निकालने के लिए"
    }
  ]
},
{
  id: 31,
  name: "LEAVE REPORT",
  icon: "🏖️",
  category: "Office",
  color: "#fdcb6e",
  colorRgb: "rgba(253,203,110,0.25)",
  use: "Employee leave records और leave balance track करने के लिए",
  tags: ["COUNTIF","LEAVE","OFFICE","HOLIDAY","BALANCE"],
  formulas: [
    {
      label: "Approved Leaves",
      code: '=COUNTIF(C2:C100,"APPROVED")',
      desc: "Approved leaves count करने के लिए"
    },
    {
      label: "Pending Leaves",
      code: '=COUNTIF(C2:C100,"PENDING")',
      desc: "Pending leave requests count करने के लिए"
    },
    {
      label: "Rejected Leaves",
      code: '=COUNTIF(C2:C100,"REJECTED")',
      desc: "Rejected leaves count करने के लिए"
    }
  ]
},
{
  id: 32,
  name: "DEPARTMENT REPORT",
  icon: "🏢",
  category: "Office",
  color: "#6c5ce7",
  colorRgb: "rgba(108,92,231,0.25)",
  use: "Office departments और department wise employees manage करने के लिए",
  tags: ["COUNTIF","DEPARTMENT","EMPLOYEE","TEAM","OFFICE"],
  formulas: [
    {
      label: "HR Employees",
      code: '=COUNTIF(B2:B100,"HR")',
      desc: "HR employees count करने के लिए"
    },
    {
      label: "IT Employees",
      code: '=COUNTIF(B2:B100,"IT")',
      desc: "IT employees count करने के लिए"
    },
    {
      label: "Sales Employees",
      code: '=COUNTIF(B2:B100,"SALES")',
      desc: "Sales employees count करने के लिए"
    }
  ]
},
{
  id: 33,
  name: "PERFORMANCE REPORT",
  icon: "📈",
  category: "Office",
  color: "#0984e3",
  colorRgb: "rgba(9,132,227,0.25)",
  use: "Employee performance score और ratings analyze करने के लिए",
  tags: ["AVERAGE","MAX","MIN","PERFORMANCE","RATING"],
  formulas: [
    {
      label: "Average Rating",
      code: '=AVERAGE(C2:C100)',
      desc: "Average performance rating निकालने के लिए"
    },
    {
      label: "Highest Rating",
      code: '=MAX(C2:C100)',
      desc: "Highest performance rating देखने के लिए"
    },
    {
      label: "Lowest Rating",
      code: '=MIN(C2:C100)',
      desc: "Lowest performance rating देखने के लिए"
    }
  ]
},
{
  id: 34,
  name: "DAILY WORK REPORT",
  icon: "📋",
  category: "Office",
  color: "#e17055",
  colorRgb: "rgba(225,112,85,0.25)",
  use: "Daily tasks और completed work records manage करने के लिए",
  tags: ["COUNTIF","TASK","WORK","DAILY","STATUS"],
  formulas: [
    {
      label: "Completed Tasks",
      code: '=COUNTIF(C2:C100,"DONE")',
      desc: "Completed tasks count करने के लिए"
    },
    {
      label: "Pending Tasks",
      code: '=COUNTIF(C2:C100,"PENDING")',
      desc: "Pending tasks count करने के लिए"
    },
    {
      label: "Work Completion %",
      code: '=COUNTIF(C2:C100,"DONE")/COUNTA(C2:C100)*100',
      desc: "Work completion percentage निकालने के लिए"
    }
  ]
},
{
  id: 35,
  name: "MEETING REPORT",
  icon: "🤝",
  category: "Office",
  color: "#00cec9",
  colorRgb: "rgba(0,206,201,0.25)",
  use: "Office meetings और attendance records manage करने के लिए",
  tags: ["COUNTIF","MEETING","ATTENDANCE","OFFICE","TEAM"],
  formulas: [
    {
      label: "Meeting Present",
      code: '=COUNTIF(C2:C100,"PRESENT")',
      desc: "Meeting उपस्थित employees count करने के लिए"
    },
    {
      label: "Meeting Absent",
      code: '=COUNTIF(C2:C100,"ABSENT")',
      desc: "Meeting absent employees count करने के लिए"
    },
    {
      label: "Total Meetings",
      code: '=COUNTA(A2:A100)',
      desc: "Total meetings count करने के लिए"
    }
  ]
},
{
  id: 36,
  name: "PROJECT REPORT",
  icon: "🚀",
  category: "Office",
  color: "#d63031",
  colorRgb: "rgba(214,48,49,0.25)",
  use: "Projects की progress और completion status track करने के लिए",
  tags: ["COUNTIF","PROJECT","STATUS","WORK","TEAM"],
  formulas: [
    {
      label: "Completed Projects",
      code: '=COUNTIF(C2:C100,"COMPLETED")',
      desc: "Completed projects count करने के लिए"
    },
    {
      label: "Pending Projects",
      code: '=COUNTIF(C2:C100,"PENDING")',
      desc: "Pending projects count करने के लिए"
    },
    {
      label: "Project Completion %",
      code: '=COUNTIF(C2:C100,"COMPLETED")/COUNTA(C2:C100)*100',
      desc: "Project completion percentage निकालने के लिए"
    }
  ]
},
 // Office REPORT 👆

 // Business REPORT 👇
{
    id: 9,
    name: "SALES REPORT",
    icon: "🧾",
    category: "Business",
    color: "#ff6b35",
    colorRgb: "rgba(255,107,53,0.3)",
    use: "Company की total sales, profit, loss और monthly revenue calculate करने के लिए",
    tags: ["SUM","SUMIF","VLOOKUP","IF"],
    formulas: [
      { label: "Total Sales", code: "=SUM(B2:B50)", desc: "सभी sales का total" },
      { label: "Profit / Loss", code: "=C2-B2", desc: "Profit या loss calculate करना" },
      { label: "Profit %", code: "=(C2-B2)/B2*100", desc: "Profit percentage निकालने के लिए" },
      { label: "Sales by Region", code: '=SUMIF(A2:A50,"North",B2:B50)', desc: "किसी specific region की sales" },
      { label: "Tax Amount", code: "=B2*18%", desc: "18% GST calculate करने के लिए" },
      { label: "Net Amount", code: "=B2+B2*18%", desc: "Tax के साथ total amount" },
    ]
  },
 {
  id: 37,
  name: "CLIENT REPORT",
  icon: "👥",
  category: "Business",
  color: "#8e44ad",
  colorRgb: "rgba(142,68,173,0.25)",
  use: "Clients की details और active clients track करने के लिए",
  tags: ["COUNTIF","CLIENT","BUSINESS","ACTIVE","RECORD"],
  formulas: [
    {
      label: "Active Clients",
      code: '=COUNTIF(C2:C100,"ACTIVE")',
      desc: "Active clients count करने के लिए"
    },
    {
      label: "Inactive Clients",
      code: '=COUNTIF(C2:C100,"INACTIVE")',
      desc: "Inactive clients count करने के लिए"
    },
    {
      label: "Total Clients",
      code: '=COUNTA(A2:A100)',
      desc: "Total clients count करने के लिए"
    }
  ]
},
{
  id: 47,
  name: "CUSTOMER REPORT",
  icon: "👥",
  category: "Business",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Customers की records और active customers manage करने के लिए",
  tags: ["COUNTIF","CUSTOMER","ACTIVE","SHOP","CLIENT"],
  formulas: [
    {
      label: "Total Customers",
      code: '=COUNTA(A2:A100)',
      desc: "Total customers count करने के लिए"
    },
    {
      label: "Active Customers",
      code: '=COUNTIF(C2:C100,"ACTIVE")',
      desc: "Active customers count करने के लिए"
    }
  ]
},
{
  id: 48,
  name: "SUPPLIER REPORT",
  icon: "🚚",
  category: "Business",
  color: "#5e35b1",
  colorRgb: "rgba(94,53,177,0.25)",
  use: "Suppliers और supply records track करने के लिए",
  tags: ["COUNT","SUPPLIER","DELIVERY","PRODUCT","SHOP"],
  formulas: [
    {
      label: "Total Suppliers",
      code: '=COUNTA(A2:A100)',
      desc: "Total suppliers count करने के लिए"
    },
    {
      label: "Delivered Orders",
      code: '=COUNTIF(C2:C100,"DELIVERED")',
      desc: "Delivered supply orders count करने के लिए"
    }
  ]
},
// Business REPORT 👆

// Shop REPORT 👇
{
  id: 40,
  name: "SALES REPORT",
  icon: "📈",
  category: "Shop",
  color: "#00c853",
  colorRgb: "rgba(0,200,83,0.25)",
  use: "Total sales और sold products track करने के लिए",
  tags: ["SUM","SALES","PRODUCT","SHOP","TOTAL"],
  formulas: [
    {
      label: "Total Sales",
      code: '=SUM(C2:C100)',
      desc: "Total sales amount calculate करने के लिए"
    },
    {
      label: "Sold Products",
      code: '=COUNT(A2:A100)',
      desc: "Sold products count करने के लिए"
    },
    {
      label: "Highest Sale",
      code: '=MAX(C2:C100)',
      desc: "Highest sale देखने के लिए"
    }
  ]
},
{
  id: 41,
  name: "DAILY SALES REPORT",
  icon: "📅",
  category: "Shop",
  color: "#1e88e5",
  colorRgb: "rgba(30,136,229,0.25)",
  use: "Daily sales income और daily orders track करने के लिए",
  tags: ["SUMIF","DATE","DAILY","SALES","ORDER"],
  formulas: [
    {
      label: "Today's Sales",
      code: '=SUMIF(A2:A100,TODAY(),C2:C100)',
      desc: "आज की sales calculate करने के लिए"
    },
    {
      label: "Today's Orders",
      code: '=COUNTIF(A2:A100,TODAY())',
      desc: "आज के orders count करने के लिए"
    }
  ]
},
{
  id: 42,
  name: "MONTHLY SALES REPORT",
  icon: "🗓️",
  category: "Shop",
  color: "#8e24aa",
  colorRgb: "rgba(142,36,170,0.25)",
  use: "Monthly sales income और growth analyze करने के लिए",
  tags: ["SUMIF","MONTH","SALES","INCOME","SHOP"],
  formulas: [
    {
      label: "January Sales",
      code: '=SUMIF(B2:B100,"January",C2:C100)',
      desc: "January month sales calculate करने के लिए"
    },
    {
      label: "Yearly Sales",
      code: '=SUM(C2:C100)',
      desc: "पूरे साल की sales calculate करने के लिए"
    }
  ]
},
{
  id: 43,
  name: "PURCHASE REPORT",
  icon: "🛍️",
  category: "Shop",
  color: "#fb8c00",
  colorRgb: "rgba(251,140,0,0.25)",
  use: "Purchased products और purchase cost track करने के लिए",
  tags: ["SUM","PURCHASE","PRODUCT","COST","SHOP"],
  formulas: [
    {
      label: "Total Purchase",
      code: '=SUM(C2:C100)',
      desc: "Total purchase amount calculate करने के लिए"
    },
    {
      label: "Purchased Products",
      code: '=COUNT(A2:A100)',
      desc: "Purchased products count करने के लिए"
    }
  ]
},
{
  id: 46,
  name: "PRODUCT REPORT",
  icon: "🧴",
  category: "Shop",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Products की details और pricing records manage करने के लिए",
  tags: ["COUNT","PRODUCT","PRICE","SHOP","ITEM"],
  formulas: [
    {
      label: "Total Products",
      code: '=COUNTA(A2:A100)',
      desc: "Total products count करने के लिए"
    },
    {
      label: "Highest Price",
      code: '=MAX(C2:C100)',
      desc: "Highest product price देखने के लिए"
    }
  ]
},
// Shop REPORT 👆

// Hostel REPORT 👇
{
  id: 24,
  name: "HOSTEL REPORT",
  icon: "🏠",
  category: "Hostel",
  color: "#4db6ac",
  colorRgb: "rgba(77,182,172,0.25)",
  use: "Hostel students और room allocation records manage करने के लिए",
  tags: ["COUNTIF","IF","HOSTEL","ROOM","STUDENT"],
  formulas: [
    {
      label: "Hostel Students",
      code: '=COUNTIF(B2:B100,"HOSTEL")',
      desc: "Hostel students count करने के लिए"
    },
    {
      label: "Available Rooms",
      code: '=COUNTIF(C2:C100,"AVAILABLE")',
      desc: "Available hostel rooms count करने के लिए"
    },
    {
      label: "Occupied Rooms",
      code: '=COUNTIF(C2:C100,"OCCUPIED")',
      desc: "Occupied rooms count करने के लिए"
    }
  ]
},
 // Hostel REPORT 👆

 // Inventory REPORT  👇
{
  id: 44,
  name: "STOCK REPORT",
  icon: "📦",
  category: "Inventory",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Available stock quantity और inventory manage करने के लिए",
  tags: ["SUM","STOCK","PRODUCT","INVENTORY","COUNT"],
  formulas: [
    {
      label: "Total Stock",
      code: '=SUM(C2:C100)',
      desc: "Total stock quantity calculate करने के लिए"
    },
    {
      label: "Available Products",
      code: '=COUNTIF(C2:C100,">0")',
      desc: "Available products count करने के लिए"
    }
  ]
},
{
  id: 45,
  name: "LOW STOCK REPORT",
  icon: "⚠️",
  category: "Inventory",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Low stock products और refill alerts देखने के लिए",
  tags: ["COUNTIF","LOW","STOCK","ALERT","PRODUCT"],
  formulas: [
    {
      label: "Low Stock Products",
      code: '=COUNTIF(C2:C100,"<10")',
      desc: "10 से कम stock वाले products count करने के लिए"
    },
    {
      label: "Stock Alert",
      code: '=IF(C2<10,"LOW STOCK","OK")',
      desc: "Low stock alert दिखाने के लिए"
    }
  ]
},
// Inventory REPORT  👆

// HR REPORT 👇
{
    id: 10,
    name: "EMPLOYEE REPORT",
    icon: "👨‍💼",
    category: "HR",
    color: "#bf5fff",
    colorRgb: "rgba(191,95,255,0.3)",
    use: "Employee की salary, bonus, overtime और deductions calculate करने के लिए",
    tags: ["SUM","IF","VLOOKUP","ROUND"],
    formulas: [
      { label: "Basic Salary", code: "=D2*E2", desc: "Daily rate × Working days" },
      { label: "HRA (40%)", code: "=D2*40%", desc: "House Rent Allowance calculate करना" },
      { label: "Overtime Pay", code: "=F2*G2*1.5", desc: "Overtime hours × rate × 1.5" },
      { label: "PF Deduction (12%)", code: "=D2*12%", desc: "Provident Fund deduction" },
      { label: "Net Salary", code: "=D2+E2+F2-G2-H2", desc: "Total salary - सभी deductions" },
      { label: "Bonus", code: '=IF(J2>90,D2*20%,IF(J2>75,D2*10%,0))', desc: "Performance के basis पर bonus" },
    ]
  },
{
    id: 12,
    name: "ATTENDANCE REPORT",
    icon: "📅",
    category: "Education / HR",
    color: "#00e5ff",
    colorRgb: "rgba(0,229,255,0.3)",
    use: "Employee या student की attendance percentage और absent days calculate करने के लिए",
    tags: ["COUNTIF","NETWORKDAYS","IF"],
    formulas: [
      { label: "Present Days", code: '=COUNTIF(B2:AF2,"P")', desc: "महीने में कितने दिन Present है" },
      { label: "Absent Days", code: '=COUNTIF(B2:AF2,"A")', desc: "महीने में कितने दिन Absent है" },
      { label: "Attendance %", code: '=COUNTIF(B2:AF2,"P")/26*100', desc: "26 working days में से attendance %" },
      { label: "Working Days", code: "=NETWORKDAYS(A1,A2)", desc: "दो dates के बीच working days" },
      { label: "Shortage", code: '=IF(AH2<75,"SHORT","OK")', desc: "75% से कम हो तो shortage alert" },
    ]
  },
// HR REPORT 👆

//Stock REPORT 👇
  {
    id: 11,
    name: "INVENTORY REPORT",
    icon: "📦",
    category: "Stock",
    color: "#ffd700",
    colorRgb: "rgba(255,215,0,0.3)",
    use: "Product stock, reorder level और inventory value calculate करने के लिए",
    tags: ["SUMIF","VLOOKUP","IF","COUNTIF"],
    formulas: [
      { label: "Stock Value", code: "=B2*C2", desc: "Quantity × Price = Total value" },
      { label: "Low Stock Alert", code: '=IF(B2<D2,"REORDER","OK")', desc: "Stock कम हो तो REORDER दिखाए" },
      { label: "Total Inventory Value", code: "=SUMPRODUCT(B2:B100,C2:C100)", desc: "पूरी inventory की total value" },
      { label: "Stock Count", code: "=COUNTIF(E2:E100,\"REORDER\")", desc: "कितने items को reorder करना है" },
      { label: "Category Total", code: '=SUMIF(A2:A100,"Electronics",B2:B100)', desc: "Category के basis पर stock total" },
    ]
  },
  //Stock REPORT 👆

  // Government REPORT 👇
{
    id: 14,
    name: "TAX REPORT",
    icon: "🧮",
    category: "Finance / Government",
    color: "#a8ff3e",
    colorRgb: "rgba(168,255,62,0.3)",
    use: "Income tax, GST, TDS और net taxable income calculate करने के लिए",
    tags: ["IF","ROUND","SUM","VLOOKUP"],
    formulas: [
      { label: "Taxable Income", code: "=B1-B2-B3", desc: "Gross income - deductions" },
      { label: "Income Tax (30%)", code: '=IF(B4>10,00000,B4*30%,IF(B4>5,00000,B4*20%,0))', desc: "Slab के basis पर income tax" },
      { label: "GST Amount", code: "=B2*18%", desc: "18% GST calculate करना" },
      { label: "CGST + SGST", code: "=B2*9%", desc: "9% CGST और 9% SGST अलग-अलग" },
      { label: "TDS Deduction (10%)", code: "=B1*10%", desc: "10% TDS deduction" },
      { label: "Net Take Home", code: "=B1-C1-D1", desc: "सभी taxes के बाद net income" },
    ]
  },
  // Government REPORT 👆
];

// RENDER CARDS
function renderCards(data) {
  const grid = document.getElementById('reportGrid');
  const noRes = document.getElementById('noResults');
  grid.innerHTML = '';

  if (data.length === 0) {
    noRes.classList.add('visible');
    return;
  }
  noRes.classList.remove('visible');

  data.forEach((r, i) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.cssText = `--accent: ${r.color}; --accent-color: ${r.color}; --accent-rgb: ${r.colorRgb}; animation-delay: ${i * 0.08}s;`;
    card.innerHTML = `
      <div class="card-icon" style="border-color:${r.color}; box-shadow: 0 0 20px ${r.colorRgb};">${r.icon}</div>
      <div class="card-name">${r.name}</div>
      <div class="card-category" style="color:${r.color}">${r.category}</div>
      <div class="card-desc">${r.use.slice(0,80)}...</div>
      <div class="formula-pills">${r.tags.map(t => `<span class="formula-pill">${t}</span>`).join('')}</div>
      <button class="view-btn" style="border-color:${r.color}; color:${r.color};" onclick="openModal(${r.id})">
        🔘 View Formulas
      </button>
    `;
    card.querySelector('.view-btn').addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      const size = Math.max(rect.width, rect.height);
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;`;
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
    grid.appendChild(card);
  });
}

// OPEN MODAL
function openModal(id) {
  const r = reports.find(x => x.id === id);
  document.getElementById('modalIcon').textContent = r.icon;
  document.getElementById('modalTitle').textContent = r.name;
  document.getElementById('modalTitle').style.color = r.color;
  document.getElementById('modalSubtitle').textContent = r.category;
  document.getElementById('modalSubtitle').style.color = r.color;
  document.getElementById('modalUse').innerHTML = `<span>📌 Use:</span> ${r.use}`;

  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <div class="formula-section-title">📊 All Formulas</div>
    ${r.formulas.map((f, i) => `
      <div class="formula-item">
        <div class="formula-label"><span class="arrow">➤</span> ${f.label} <small style="color:#555;font-weight:400;margin-left:auto;font-size:0.75rem">${f.desc}</small></div>
        <div class="formula-code-row">
          <div class="formula-code">${f.code}</div>
          <button class="copy-btn" onclick="copyFormula(this, '${f.code.replace(/'/g,"&apos;")}')">📋 Copy</button>
        </div>
      </div>
    `).join('')}
    <div class="modal-tutorial">
      <a class="tutorial-btn" href="https://www.youtube.com/results?search_query=${encodeURIComponent(r.name + ' excel formula tutorial')}" target="_blank">
        ▶ Watch Tutorial on YouTube
      </a>
    </div>
  `;

  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// CLOSE MODAL
document.getElementById('modalClose').onclick = closeModal;
document.getElementById('modalOverlay').onclick = function(e) {
  if (e.target === this) closeModal();
};
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// COPY
function copyFormula(btn, code) {
  navigator.clipboard.writeText(code).then(() => {
    btn.textContent = '✅ Copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '📋 Copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// SEARCH
document.getElementById('searchInput').addEventListener('input', function() {
  const q = this.value.toLowerCase().trim();
  if (!q) { renderCards(reports); return; }
  const filtered = reports.filter(r =>
    r.name.toLowerCase().includes(q) ||
    r.category.toLowerCase().includes(q) ||
    r.use.toLowerCase().includes(q) ||
    r.tags.some(t => t.toLowerCase().includes(q)) ||
    r.formulas.some(f => f.code.toLowerCase().includes(q) || f.label.toLowerCase().includes(q))
  );
  renderCards(filtered);
});

// COUNT
document.getElementById('totalFormulas').textContent = reports.reduce((a, r) => a + r.formulas.length, 0);
document.getElementById('totalReports').textContent = reports.length;

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.style.opacity = '1';
  });
}, { threshold: 0.1 });

// INIT
renderCards(reports);