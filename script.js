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
    //shop Reports  👆
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
    //bank Reports  👇
    {
  id: 401,
  name: "ACCOUNT REPORT",
  icon: "🏦",
  category: "Bank",
  color: "#1565c0",
  colorRgb: "rgba(21,101,192,0.25)",
  use: "Bank accounts, balance और account records manage करनेकेलिए",
  tags: ["ACCOUNT","BANK","BALANCE","CUSTOMER","MONEY"],
  formulas: [
    {
      label: "Total Accounts",
      code: '=COUNTA(B2:B100)',
      desc: "Total bank accounts count करनेकेलिए"
    },
    {
      label: "Active Accounts",
      code: '=COUNTIF(E2:E100,"ACTIVE")',
      desc: "Active accounts count करनेकेलिए"
    },
    {
      label: "Inactive Accounts",
      code: '=COUNTIF(E2:E100,"INACTIVE")',
      desc: "Inactive accounts count करनेकेलिए"
    },
    {
      label: "Savings Accounts",
      code: '=COUNTIF(F2:F100,"SAVINGS")',
      desc: "Savings accounts count करनेकेलिए"
    },
    {
      label: "Current Accounts",
      code: '=COUNTIF(F2:F100,"CURRENT")',
      desc: "Current accounts count करनेकेलिए"
    },
    {
      label: "Total Balance",
      code: '=SUM(G2:G100)',
      desc: "Total account balance calculate करनेकेलिए"
    },
    {
      label: "Highest Balance",
      code: '=MAX(G2:G100)',
      desc: "Highest account balance देखनेकेलिए"
    },
    {
      label: "Lowest Balance",
      code: '=MIN(G2:G100)',
      desc: "Lowest account balance देखनेकेलिए"
    },
    {
      label: "Average Balance",
      code: '=AVERAGE(G2:G100)',
      desc: "Average account balance calculate करनेकेलिए"
    },
    {
      label: "Account Status",
      code: '=IF(G2>=100000,"PREMIUM","NORMAL")',
      desc: "Account category check करनेकेलिए"
    }
  ]
},

{
  id: 402,
  name: "CUSTOMER REPORT",
  icon: "👨‍💼",
  category: "Bank",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Bank customers, account holders और customer activity manage करनेकेलिए",
  tags: ["CUSTOMER","BANK","ACCOUNT","CLIENT","FINANCE"],
  formulas: [
    {
      label: "Total Customers",
      code: '=COUNTA(B2:B100)',
      desc: "Total customers count करनेकेलिए"
    },
    {
      label: "Male Customers",
      code: '=COUNTIF(E2:E100,"MALE")',
      desc: "Male customers count करनेकेलिए"
    },
    {
      label: "Female Customers",
      code: '=COUNTIF(E2:E100,"FEMALE")',
      desc: "Female customers count करनेकेलिए"
    },
    {
      label: "Verified Customers",
      code: '=COUNTIF(F2:F100,"VERIFIED")',
      desc: "Verified customers count करनेकेलिए"
    },
    {
      label: "Pending KYC",
      code: '=COUNTIF(F2:F100,"PENDING")',
      desc: "Pending KYC customers count करनेकेलिए"
    },
    {
      label: "Total Deposits",
      code: '=SUM(G2:G100)',
      desc: "Customer deposits calculate करनेकेलिए"
    },
    {
      label: "Highest Deposit",
      code: '=MAX(G2:G100)',
      desc: "Highest deposit देखनेकेलिए"
    },
    {
      label: "Lowest Deposit",
      code: '=MIN(G2:G100)',
      desc: "Lowest deposit देखनेकेलिए"
    },
    {
      label: "Average Deposit",
      code: '=AVERAGE(G2:G100)',
      desc: "Average customer deposit calculate करनेकेलिए"
    },
    {
      label: "Customer Status",
      code: '=IF(G2>=500000,"VIP","NORMAL")',
      desc: "Customer category check करनेकेलिए"
    }
  ]
},

{
  id: 403,
  name: "DEPOSIT REPORT",
  icon: "💰",
  category: "Bank",
  color: "#2e7d32",
  colorRgb: "rgba(46,125,50,0.25)",
  use: "Bank deposits, cash जमा और customer transactions manage करनेकेलिए",
  tags: ["DEPOSIT","BANK","MONEY","TRANSACTION","FINANCE"],
  formulas: [
    {
      label: "Total Deposits",
      code: '=SUM(E2:E100)',
      desc: "Total deposits calculate करनेकेलिए"
    },
    {
      label: "Cash Deposits",
      code: '=SUMIF(F2:F100,"CASH",E2:E100)',
      desc: "Cash deposits calculate करनेकेलिए"
    },
    {
      label: "Online Deposits",
      code: '=SUMIF(F2:F100,"ONLINE",E2:E100)',
      desc: "Online deposits calculate करनेकेलिए"
    },
    {
      label: "Cheque Deposits",
      code: '=SUMIF(F2:F100,"CHEQUE",E2:E100)',
      desc: "Cheque deposits calculate करनेकेलिए"
    },
    {
      label: "Total Transactions",
      code: '=COUNTA(B2:B100)',
      desc: "Total deposit transactions count करनेकेलिए"
    },
    {
      label: "Highest Deposit",
      code: '=MAX(E2:E100)',
      desc: "Highest deposit amount देखनेकेलिए"
    },
    {
      label: "Lowest Deposit",
      code: '=MIN(E2:E100)',
      desc: "Lowest deposit amount देखनेकेलिए"
    },
    {
      label: "Average Deposit",
      code: '=AVERAGE(E2:E100)',
      desc: "Average deposit amount calculate करनेकेलिए"
    },
    {
      label: "Large Deposits",
      code: '=COUNTIF(E2:E100,">100000")',
      desc: "Large deposits count करनेकेलिए"
    },
    {
      label: "Deposit Status",
      code: '=IF(E2>=100000,"HIGH VALUE","NORMAL")',
      desc: "Deposit status check करनेकेलिए"
    }
  ]
},

{
  id: 404,
  name: "WITHDRAW REPORT",
  icon: "💸",
  category: "Bank",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Cash withdraw, ATM withdrawal और account transactions manage करनेकेलिए",
  tags: ["WITHDRAW","BANK","ATM","TRANSACTION","MONEY"],
  formulas: [
    {
      label: "Total Withdrawals",
      code: '=SUM(E2:E100)',
      desc: "Total withdrawals calculate करनेकेलिए"
    },
    {
      label: "ATM Withdrawals",
      code: '=SUMIF(F2:F100,"ATM",E2:E100)',
      desc: "ATM withdrawals calculate करनेकेलिए"
    },
    {
      label: "Cheque Withdrawals",
      code: '=SUMIF(F2:F100,"CHEQUE",E2:E100)',
      desc: "Cheque withdrawals calculate करनेकेलिए"
    },
    {
      label: "Online Withdrawals",
      code: '=SUMIF(F2:F100,"ONLINE",E2:E100)',
      desc: "Online withdrawals calculate करनेकेलिए"
    },
    {
      label: "Highest Withdrawal",
      code: '=MAX(E2:E100)',
      desc: "Highest withdrawal देखनेकेलिए"
    },
    {
      label: "Lowest Withdrawal",
      code: '=MIN(E2:E100)',
      desc: "Lowest withdrawal देखनेकेलिए"
    },
    {
      label: "Average Withdrawal",
      code: '=AVERAGE(E2:E100)',
      desc: "Average withdrawal calculate करनेकेलिए"
    },
    {
      label: "Withdrawal Count",
      code: '=COUNTA(B2:B100)',
      desc: "Withdrawal transactions count करनेकेलिए"
    },
    {
      label: "Large Withdrawals",
      code: '=COUNTIF(E2:E100,">50000")',
      desc: "Large withdrawals count करनेकेलिए"
    },
    {
      label: "Withdraw Status",
      code: '=IF(E2>=50000,"HIGH","NORMAL")',
      desc: "Withdrawal status check करनेकेलिए"
    }
  ]
},
{
  id: 405,
  name: "LOAN REPORT",
  icon: "📄",
  category: "Bank",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Bank loans, approvals और pending loan records manage करनेकेलिए",
  tags: ["LOAN","BANK","EMI","CUSTOMER","FINANCE"],
  formulas: [
    {
      label: "Total Loans",
      code: '=COUNTA(B2:B100)',
      desc: "Total loans count करनेकेलिए"
    },
    {
      label: "Approved Loans",
      code: '=COUNTIF(E2:E100,"APPROVED")',
      desc: "Approved loans count करनेकेलिए"
    },
    {
      label: "Pending Loans",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending loans count करनेकेलिए"
    },
    {
      label: "Rejected Loans",
      code: '=COUNTIF(E2:E100,"REJECTED")',
      desc: "Rejected loans count करनेकेलिए"
    },
    {
      label: "Total Loan Amount",
      code: '=SUM(F2:F100)',
      desc: "Total loan amount calculate करनेकेलिए"
    },
    {
      label: "Highest Loan",
      code: '=MAX(F2:F100)',
      desc: "Highest loan amount देखनेकेलिए"
    },
    {
      label: "Lowest Loan",
      code: '=MIN(F2:F100)',
      desc: "Lowest loan amount देखनेकेलिए"
    },
    {
      label: "Average Loan",
      code: '=AVERAGE(F2:F100)',
      desc: "Average loan amount calculate करनेकेलिए"
    },
    {
      label: "Interest Collection",
      code: '=SUM(G2:G100)',
      desc: "Loan interest collection calculate करनेकेलिए"
    },
    {
      label: "Loan Status",
      code: '=IF(F2>=1000000,"BIG LOAN","NORMAL")',
      desc: "Loan category check करनेकेलिए"
    }
  ]
},
    {
  id: 406,
  name: "EMI REPORT",
  icon: "📆",
  category: "Bank",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Loan EMI payments, due dates और pending EMI records manage करनेकेलिए",
  tags: ["EMI","LOAN","BANK","PAYMENT","INSTALLMENT"],
  formulas: [
    {
      label: "Total EMI",
      code: '=SUM(E2:E100)',
      desc: "Total EMI amount calculate करनेकेलिए"
    },
    {
      label: "Paid EMI",
      code: '=SUMIF(F2:F100,"PAID",E2:E100)',
      desc: "Paid EMI calculate करनेकेलिए"
    },
    {
      label: "Pending EMI",
      code: '=SUMIF(F2:F100,"PENDING",E2:E100)',
      desc: "Pending EMI calculate करनेकेलिए"
    },
    {
      label: "Late EMI",
      code: '=COUNTIF(F2:F100,"LATE")',
      desc: "Late EMI count करनेकेलिए"
    },
    {
      label: "Highest EMI",
      code: '=MAX(E2:E100)',
      desc: "Highest EMI देखनेकेलिए"
    },
    {
      label: "Lowest EMI",
      code: '=MIN(E2:E100)',
      desc: "Lowest EMI देखनेकेलिए"
    },
    {
      label: "Average EMI",
      code: '=AVERAGE(E2:E100)',
      desc: "Average EMI calculate करनेकेलिए"
    },
    {
      label: "EMI Count",
      code: '=COUNTA(B2:B100)',
      desc: "Total EMI records count करनेकेलिए"
    },
    {
      label: "Collected EMI",
      code: '=SUM(G2:G100)',
      desc: "Collected EMI amount calculate करनेकेलिए"
    },
    {
      label: "EMI Status",
      code: '=IF(E2>=50000,"HIGH EMI","NORMAL")',
      desc: "EMI category check करनेकेलिए"
    }
  ]
},

{
  id: 407,
  name: "INTEREST REPORT",
  icon: "📈",
  category: "Bank",
  color: "#00838f",
  colorRgb: "rgba(0,131,143,0.25)",
  use: "Interest calculation, savings interest और loan interest records manage करनेकेलिए",
  tags: ["INTEREST","BANK","LOAN","SAVINGS","FINANCE"],
  formulas: [
    {
      label: "Total Interest",
      code: '=SUM(E2:E100)',
      desc: "Total interest calculate करनेकेलिए"
    },
    {
      label: "Savings Interest",
      code: '=SUMIF(F2:F100,"SAVINGS",E2:E100)',
      desc: "Savings interest calculate करनेकेलिए"
    },
    {
      label: "Loan Interest",
      code: '=SUMIF(F2:F100,"LOAN",E2:E100)',
      desc: "Loan interest calculate करनेकेलिए"
    },
    {
      label: "FD Interest",
      code: '=SUMIF(F2:F100,"FD",E2:E100)',
      desc: "FD interest calculate करनेकेलिए"
    },
    {
      label: "Highest Interest",
      code: '=MAX(E2:E100)',
      desc: "Highest interest देखनेकेलिए"
    },
    {
      label: "Lowest Interest",
      code: '=MIN(E2:E100)',
      desc: "Lowest interest देखनेकेलिए"
    },
    {
      label: "Average Interest",
      code: '=AVERAGE(E2:E100)',
      desc: "Average interest calculate करनेकेलिए"
    },
    {
      label: "Interest Records",
      code: '=COUNTA(B2:B100)',
      desc: "Interest records count करनेकेलिए"
    },
    {
      label: "High Interest Accounts",
      code: '=COUNTIF(E2:E100,">10000")',
      desc: "High interest accounts count करनेकेलिए"
    },
    {
      label: "Interest Status",
      code: '=IF(E2>=10000,"HIGH","NORMAL")',
      desc: "Interest category check करनेकेलिए"
    }
  ]
},

{
  id: 408,
  name: "TRANSACTION REPORT",
  icon: "💳",
  category: "Bank",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Bank transactions, transfers और account activities manage करनेकेलिए",
  tags: ["TRANSACTION","BANK","TRANSFER","PAYMENT","ACCOUNT"],
  formulas: [
    {
      label: "Total Transactions",
      code: '=COUNTA(B2:B100)',
      desc: "Total transactions count करनेकेलिए"
    },
    {
      label: "Credit Transactions",
      code: '=COUNTIF(E2:E100,"CREDIT")',
      desc: "Credit transactions count करनेकेलिए"
    },
    {
      label: "Debit Transactions",
      code: '=COUNTIF(E2:E100,"DEBIT")',
      desc: "Debit transactions count करनेकेलिए"
    },
    {
      label: "Online Transactions",
      code: '=COUNTIF(F2:F100,"ONLINE")',
      desc: "Online transactions count करनेकेलिए"
    },
    {
      label: "Cash Transactions",
      code: '=COUNTIF(F2:F100,"CASH")',
      desc: "Cash transactions count करनेकेलिए"
    },
    {
      label: "Total Amount",
      code: '=SUM(G2:G100)',
      desc: "Total transaction amount calculate करनेकेलिए"
    },
    {
      label: "Highest Transaction",
      code: '=MAX(G2:G100)',
      desc: "Highest transaction amount देखनेकेलिए"
    },
    {
      label: "Lowest Transaction",
      code: '=MIN(G2:G100)',
      desc: "Lowest transaction amount देखनेकेलिए"
    },
    {
      label: "Average Transaction",
      code: '=AVERAGE(G2:G100)',
      desc: "Average transaction amount calculate करनेकेलिए"
    },
    {
      label: "Transaction Status",
      code: '=IF(G2>=100000,"HIGH VALUE","NORMAL")',
      desc: "Transaction category check करनेकेलिए"
    }
  ]
},

{
  id: 409,
  name: "CREDIT REPORT",
  icon: "🟢",
  category: "Bank",
  color: "#2e7d32",
  colorRgb: "rgba(46,125,50,0.25)",
  use: "Credit transactions, incoming payments और account credits manage करनेकेलिए",
  tags: ["CREDIT","BANK","PAYMENT","MONEY","ACCOUNT"],
  formulas: [
    {
      label: "Total Credit",
      code: '=SUM(E2:E100)',
      desc: "Total credit amount calculate करनेकेलिए"
    },
    {
      label: "Credit Count",
      code: '=COUNTA(B2:B100)',
      desc: "Credit transactions count करनेकेलिए"
    },
    {
      label: "Online Credit",
      code: '=SUMIF(F2:F100,"ONLINE",E2:E100)',
      desc: "Online credit amount calculate करनेकेलिए"
    },
    {
      label: "Cash Credit",
      code: '=SUMIF(F2:F100,"CASH",E2:E100)',
      desc: "Cash credit amount calculate करनेकेलिए"
    },
    {
      label: "Cheque Credit",
      code: '=SUMIF(F2:F100,"CHEQUE",E2:E100)',
      desc: "Cheque credit amount calculate करनेकेलिए"
    },
    {
      label: "Highest Credit",
      code: '=MAX(E2:E100)',
      desc: "Highest credit amount देखनेकेलिए"
    },
    {
      label: "Lowest Credit",
      code: '=MIN(E2:E100)',
      desc: "Lowest credit amount देखनेकेलिए"
    },
    {
      label: "Average Credit",
      code: '=AVERAGE(E2:E100)',
      desc: "Average credit calculate करनेकेलिए"
    },
    {
      label: "Large Credits",
      code: '=COUNTIF(E2:E100,">50000")',
      desc: "Large credits count करनेकेलिए"
    },
    {
      label: "Credit Status",
      code: '=IF(E2>=50000,"HIGH","NORMAL")',
      desc: "Credit category check करनेकेलिए"
    }
  ]
},

{
  id: 410,
  name: "DEBIT REPORT",
  icon: "🔴",
  category: "Bank",
  color: "#c62828",
  colorRgb: "rgba(198,40,40,0.25)",
  use: "Debit transactions, outgoing payments और withdrawals manage करनेकेलिए",
  tags: ["DEBIT","BANK","PAYMENT","WITHDRAW","ACCOUNT"],
  formulas: [
    {
      label: "Total Debit",
      code: '=SUM(E2:E100)',
      desc: "Total debit amount calculate करनेकेलिए"
    },
    {
      label: "Debit Count",
      code: '=COUNTA(B2:B100)',
      desc: "Debit transactions count करनेकेलिए"
    },
    {
      label: "ATM Debit",
      code: '=SUMIF(F2:F100,"ATM",E2:E100)',
      desc: "ATM debit amount calculate करनेकेलिए"
    },
    {
      label: "Online Debit",
      code: '=SUMIF(F2:F100,"ONLINE",E2:E100)',
      desc: "Online debit amount calculate करनेकेलिए"
    },
    {
      label: "Cheque Debit",
      code: '=SUMIF(F2:F100,"CHEQUE",E2:E100)',
      desc: "Cheque debit amount calculate करनेकेलिए"
    },
    {
      label: "Highest Debit",
      code: '=MAX(E2:E100)',
      desc: "Highest debit amount देखनेकेलिए"
    },
    {
      label: "Lowest Debit",
      code: '=MIN(E2:E100)',
      desc: "Lowest debit amount देखनेकेलिए"
    },
    {
      label: "Average Debit",
      code: '=AVERAGE(E2:E100)',
      desc: "Average debit calculate करनेकेलिए"
    },
    {
      label: "Large Debits",
      code: '=COUNTIF(E2:E100,">50000")',
      desc: "Large debit transactions count करनेकेलिए"
    },
    {
      label: "Debit Status",
      code: '=IF(E2>=50000,"HIGH","NORMAL")',
      desc: "Debit category check करनेकेलिए"
    }
  ]
},
    {
  id: 411,
  name: "BANK STATEMENT REPORT",
  icon: "📄",
  category: "Bank",
  color: "#5e35b1",
  colorRgb: "rgba(94,53,177,0.25)",
  use: "Customer account statement, balance history और transactions manage करनेकेलिए",
  tags: ["STATEMENT","BANK","ACCOUNT","TRANSACTION","BALANCE"],
  formulas: [
    {
      label: "Opening Balance",
      code: '=SUM(E2:E100)',
      desc: "Opening balance calculate करनेकेलिए"
    },
    {
      label: "Total Credit",
      code: '=SUM(F2:F100)',
      desc: "Total credited amount calculate करनेकेलिए"
    },
    {
      label: "Total Debit",
      code: '=SUM(G2:G100)',
      desc: "Total debited amount calculate करनेकेलिए"
    },
    {
      label: "Closing Balance",
      code: '=E2+F2-G2',
      desc: "Closing balance calculate करनेकेलिए"
    },
    {
      label: "Transaction Count",
      code: '=COUNTA(B2:B100)',
      desc: "Total statement transactions count करनेकेलिए"
    },
    {
      label: "Highest Credit",
      code: '=MAX(F2:F100)',
      desc: "Highest credited amount देखनेकेलिए"
    },
    {
      label: "Highest Debit",
      code: '=MAX(G2:G100)',
      desc: "Highest debited amount देखनेकेलिए"
    },
    {
      label: "Average Credit",
      code: '=AVERAGE(F2:F100)',
      desc: "Average credited amount calculate करनेकेलिए"
    },
    {
      label: "Average Debit",
      code: '=AVERAGE(G2:G100)',
      desc: "Average debited amount calculate करनेकेलिए"
    },
    {
      label: "Statement Status",
      code: '=IF(H2>=100000,"HIGH BALANCE","NORMAL")',
      desc: "Statement balance status check करनेकेलिए"
    }
  ]
},

{
  id: 412,
  name: "ATM REPORT",
  icon: "🏧",
  category: "Bank",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "ATM cash withdrawal, deposits और ATM transactions manage करनेकेलिए",
  tags: ["ATM","BANK","WITHDRAW","TRANSACTION","CASH"],
  formulas: [
    {
      label: "Total ATM Transactions",
      code: '=COUNTA(B2:B100)',
      desc: "Total ATM transactions count करनेकेलिए"
    },
    {
      label: "Cash Withdrawals",
      code: '=SUM(E2:E100)',
      desc: "ATM cash withdrawals calculate करनेकेलिए"
    },
    {
      label: "Cash Deposits",
      code: '=SUM(F2:F100)',
      desc: "ATM cash deposits calculate करनेकेलिए"
    },
    {
      label: "ATM Balance",
      code: '=G2-E2+F2',
      desc: "ATM remaining balance calculate करनेकेलिए"
    },
    {
      label: "Successful Transactions",
      code: '=COUNTIF(H2:H100,"SUCCESS")',
      desc: "Successful ATM transactions count करनेकेलिए"
    },
    {
      label: "Failed Transactions",
      code: '=COUNTIF(H2:H100,"FAILED")',
      desc: "Failed ATM transactions count करनेकेलिए"
    },
    {
      label: "Highest Withdrawal",
      code: '=MAX(E2:E100)',
      desc: "Highest ATM withdrawal देखनेकेलिए"
    },
    {
      label: "Lowest Withdrawal",
      code: '=MIN(E2:E100)',
      desc: "Lowest ATM withdrawal देखनेकेलिए"
    },
    {
      label: "Average Withdrawal",
      code: '=AVERAGE(E2:E100)',
      desc: "Average ATM withdrawal calculate करनेकेलिए"
    },
    {
      label: "ATM Status",
      code: '=IF(G2<50000,"LOW CASH","AVAILABLE")',
      desc: "ATM cash status check करनेकेलिए"
    }
  ]
},

{
  id: 413,
  name: "ONLINE BANKING REPORT",
  icon: "🌐",
  category: "Bank",
  color: "#00838f",
  colorRgb: "rgba(0,131,143,0.25)",
  use: "Online banking users, UPI, net banking और digital payments manage करनेकेलिए",
  tags: ["ONLINE","BANKING","UPI","PAYMENT","DIGITAL"],
  formulas: [
    {
      label: "Total Online Users",
      code: '=COUNTA(B2:B100)',
      desc: "Total online banking users count करनेकेलिए"
    },
    {
      label: "UPI Transactions",
      code: '=COUNTIF(E2:E100,"UPI")',
      desc: "UPI transactions count करनेकेलिए"
    },
    {
      label: "Net Banking Transactions",
      code: '=COUNTIF(E2:E100,"NET BANKING")',
      desc: "Net banking transactions count करनेकेलिए"
    },
    {
      label: "Mobile Banking Users",
      code: '=COUNTIF(F2:F100,"MOBILE")',
      desc: "Mobile banking users count करनेकेलिए"
    },
    {
      label: "Online Amount",
      code: '=SUM(G2:G100)',
      desc: "Online transaction amount calculate करनेकेलिए"
    },
    {
      label: "Successful Payments",
      code: '=COUNTIF(H2:H100,"SUCCESS")',
      desc: "Successful online payments count करनेकेलिए"
    },
    {
      label: "Failed Payments",
      code: '=COUNTIF(H2:H100,"FAILED")',
      desc: "Failed online payments count करनेकेलिए"
    },
    {
      label: "Highest Online Payment",
      code: '=MAX(G2:G100)',
      desc: "Highest online payment देखनेकेलिए"
    },
    {
      label: "Average Online Payment",
      code: '=AVERAGE(G2:G100)',
      desc: "Average online payment calculate करनेकेलिए"
    },
    {
      label: "Online Banking Status",
      code: '=IF(G2>=100000,"HIGH VALUE","NORMAL")',
      desc: "Online banking transaction status check करनेकेलिए"
    }
  ]
},
    //bank Reports  👆
    //INVENTORY REPORTS👇
    {
  id: 501,
  name: "PRODUCT STOCK REPORT",
  icon: "📦",
  category: "Inventory",
  color: "#1565c0",
  colorRgb: "rgba(21,101,192,0.25)",
  use: "Products stock quantity, availability और inventory manage करनेकेलिए",
  tags: ["STOCK","PRODUCT","INVENTORY","QUANTITY","WAREHOUSE"],
  formulas: [
    {
      label: "Total Products",
      code: '=COUNTA(B2:B100)',
      desc: "Total products count करनेकेलिए"
    },
    {
      label: "Available Stock",
      code: '=SUM(E2:E100)',
      desc: "Available stock quantity calculate करनेकेलिए"
    },
    {
      label: "Sold Stock",
      code: '=SUM(F2:F100)',
      desc: "Sold stock quantity calculate करनेकेलिए"
    },
    {
      label: "Remaining Stock",
      code: '=E2-F2',
      desc: "Remaining stock calculate करनेकेलिए"
    },
    {
      label: "Low Stock Products",
      code: '=COUNTIF(G2:G100,"<10")',
      desc: "Low stock products count करनेकेलिए"
    },
    {
      label: "Out Of Stock",
      code: '=COUNTIF(G2:G100,"=0")',
      desc: "Out of stock products count करनेकेलिए"
    },
    {
      label: "Highest Stock",
      code: '=MAX(G2:G100)',
      desc: "Highest stock quantity देखनेकेलिए"
    },
    {
      label: "Lowest Stock",
      code: '=MIN(G2:G100)',
      desc: "Lowest stock quantity देखनेकेलिए"
    },
    {
      label: "Average Stock",
      code: '=AVERAGE(G2:G100)',
      desc: "Average stock quantity calculate करनेकेलिए"
    },
    {
      label: "Stock Status",
      code: '=IF(G2<10,"LOW STOCK","AVAILABLE")',
      desc: "Stock status check करनेकेलिए"
    }
  ]
},

{
  id: 502,
  name: "WAREHOUSE REPORT",
  icon: "🏬",
  category: "Inventory",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Warehouse stock, storage capacity और product movement manage करनेकेलिए",
  tags: ["WAREHOUSE","STORAGE","INVENTORY","PRODUCT","STOCK"],
  formulas: [
    {
      label: "Total Warehouse Items",
      code: '=COUNTA(B2:B100)',
      desc: "Warehouse items count करनेकेलिए"
    },
    {
      label: "Stored Quantity",
      code: '=SUM(E2:E100)',
      desc: "Stored quantity calculate करनेकेलिए"
    },
    {
      label: "Dispatched Quantity",
      code: '=SUM(F2:F100)',
      desc: "Dispatched quantity calculate करनेकेलिए"
    },
    {
      label: "Remaining Quantity",
      code: '=E2-F2',
      desc: "Remaining warehouse quantity calculate करनेकेलिए"
    },
    {
      label: "Warehouse Capacity",
      code: '=SUM(G2:G100)',
      desc: "Warehouse capacity calculate करनेकेलिए"
    },
    {
      label: "Used Capacity",
      code: '=SUM(H2:H100)',
      desc: "Used warehouse capacity calculate करनेकेलिए"
    },
    {
      label: "Free Capacity",
      code: '=G2-H2',
      desc: "Free warehouse capacity calculate करनेकेलिए"
    },
    {
      label: "Highest Stored Product",
      code: '=MAX(E2:E100)',
      desc: "Highest stored product quantity देखनेकेलिए"
    },
    {
      label: "Average Storage",
      code: '=AVERAGE(E2:E100)',
      desc: "Average storage quantity calculate करनेकेलिए"
    },
    {
      label: "Warehouse Status",
      code: '=IF(H2>=G2,"FULL","AVAILABLE")',
      desc: "Warehouse status check करनेकेलिए"
    }
  ]
},

{
  id: 503,
  name: "INWARD REPORT",
  icon: "⬇️",
  category: "Inventory",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Incoming stock, purchases और warehouse inward entries manage करनेकेलिए",
  tags: ["INWARD","STOCK","PURCHASE","INVENTORY","ENTRY"],
  formulas: [
    {
      label: "Total Inward Entries",
      code: '=COUNTA(B2:B100)',
      desc: "Total inward entries count करनेकेलिए"
    },
    {
      label: "Total Inward Quantity",
      code: '=SUM(E2:E100)',
      desc: "Total inward quantity calculate करनेकेलिए"
    },
    {
      label: "Total Purchase Amount",
      code: '=SUM(F2:F100)',
      desc: "Purchase amount calculate करनेकेलिए"
    },
    {
      label: "Highest Inward Quantity",
      code: '=MAX(E2:E100)',
      desc: "Highest inward quantity देखनेकेलिए"
    },
    {
      label: "Lowest Inward Quantity",
      code: '=MIN(E2:E100)',
      desc: "Lowest inward quantity देखनेकेलिए"
    },
    {
      label: "Average Inward Quantity",
      code: '=AVERAGE(E2:E100)',
      desc: "Average inward quantity calculate करनेकेलिए"
    },
    {
      label: "Supplier Count",
      code: '=COUNTA(G2:G100)',
      desc: "Suppliers count करनेकेलिए"
    },
    {
      label: "Paid Purchases",
      code: '=SUMIF(H2:H100,"PAID",F2:F100)',
      desc: "Paid purchases calculate करनेकेलिए"
    },
    {
      label: "Pending Purchases",
      code: '=SUMIF(H2:H100,"PENDING",F2:F100)',
      desc: "Pending purchases calculate करनेकेलिए"
    },
    {
      label: "Inward Status",
      code: '=IF(E2>=100,"BULK STOCK","NORMAL")',
      desc: "Inward stock status check करनेकेलिए"
    }
  ]
},

{
  id: 504,
  name: "OUTWARD REPORT",
  icon: "⬆️",
  category: "Inventory",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Outgoing stock, deliveries और outward stock movement manage करनेकेलिए",
  tags: ["OUTWARD","DELIVERY","STOCK","INVENTORY","SALES"],
  formulas: [
    {
      label: "Total Outward Entries",
      code: '=COUNTA(B2:B100)',
      desc: "Total outward entries count करनेकेलिए"
    },
    {
      label: "Total Outward Quantity",
      code: '=SUM(E2:E100)',
      desc: "Total outward quantity calculate करनेकेलिए"
    },
    {
      label: "Delivery Amount",
      code: '=SUM(F2:F100)',
      desc: "Delivery amount calculate करनेकेलिए"
    },
    {
      label: "Highest Outward Quantity",
      code: '=MAX(E2:E100)',
      desc: "Highest outward quantity देखनेकेलिए"
    },
    {
      label: "Lowest Outward Quantity",
      code: '=MIN(E2:E100)',
      desc: "Lowest outward quantity देखनेकेलिए"
    },
    {
      label: "Average Outward Quantity",
      code: '=AVERAGE(E2:E100)',
      desc: "Average outward quantity calculate करनेकेलिए"
    },
    {
      label: "Delivered Orders",
      code: '=COUNTIF(G2:G100,"DELIVERED")',
      desc: "Delivered orders count करनेकेलिए"
    },
    {
      label: "Pending Orders",
      code: '=COUNTIF(G2:G100,"PENDING")',
      desc: "Pending outward orders count करनेकेलिए"
    },
    {
      label: "Returned Orders",
      code: '=COUNTIF(G2:G100,"RETURN")',
      desc: "Returned outward orders count करनेकेलिए"
    },
    {
      label: "Outward Status",
      code: '=IF(E2>=100,"HIGH MOVEMENT","NORMAL")',
      desc: "Outward stock status check करनेकेलिए"
    }
  ]
},

{
  id: 505,
  name: "DAMAGED PRODUCT REPORT",
  icon: "⚠️",
  category: "Inventory",
  color: "#c62828",
  colorRgb: "rgba(198,40,40,0.25)",
  use: "Damaged products, losses और replacement records manage करनेकेलिए",
  tags: ["DAMAGED","PRODUCT","LOSS","INVENTORY","STOCK"],
  formulas: [
    {
      label: "Total Damaged Products",
      code: '=COUNTA(B2:B100)',
      desc: "Damaged products count करनेकेलिए"
    },
    {
      label: "Damaged Quantity",
      code: '=SUM(E2:E100)',
      desc: "Damaged quantity calculate करनेकेलिए"
    },
    {
      label: "Loss Amount",
      code: '=SUM(F2:F100)',
      desc: "Loss amount calculate करनेकेलिए"
    },
    {
      label: "Replaceable Products",
      code: '=COUNTIF(G2:G100,"YES")',
      desc: "Replaceable products count करनेकेलिए"
    },
    {
      label: "Non Replaceable Products",
      code: '=COUNTIF(G2:G100,"NO")',
      desc: "Non replaceable products count करनेकेलिए"
    },
    {
      label: "Highest Damage",
      code: '=MAX(F2:F100)',
      desc: "Highest damage loss देखनेकेलिए"
    },
    {
      label: "Lowest Damage",
      code: '=MIN(F2:F100)',
      desc: "Lowest damage loss देखनेकेलिए"
    },
    {
      label: "Average Damage",
      code: '=AVERAGE(F2:F100)',
      desc: "Average damage amount calculate करनेकेलिए"
    },
    {
      label: "Recovered Loss",
      code: '=SUM(H2:H100)',
      desc: "Recovered loss amount calculate करनेकेलिए"
    },
    {
      label: "Damage Status",
      code: '=IF(F2>=5000,"HIGH DAMAGE","LOW DAMAGE")',
      desc: "Damage level check करनेकेलिए"
    }
  ]
},
    {
  id: 506,
  name: "INVENTORY VALUATION REPORT",
  icon: "💰",
  category: "Inventory",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Inventory total value, stock worth और warehouse assets calculate करनेकेलिए",
  tags: ["VALUATION","INVENTORY","STOCK","VALUE","PRODUCT"],
  formulas: [
    {
      label: "Total Inventory Value",
      code: '=SUM(E2:E100)',
      desc: "Total inventory value calculate करनेकेलिए"
    },
    {
      label: "Purchase Value",
      code: '=SUM(F2:F100)',
      desc: "Purchase value calculate करनेकेलिए"
    },
    {
      label: "Selling Value",
      code: '=SUM(G2:G100)',
      desc: "Selling value calculate करनेकेलिए"
    },
    {
      label: "Profit Value",
      code: '=G2-F2',
      desc: "Profit value calculate करनेकेलिए"
    },
    {
      label: "Highest Inventory Value",
      code: '=MAX(E2:E100)',
      desc: "Highest inventory value देखनेकेलिए"
    },
    {
      label: "Lowest Inventory Value",
      code: '=MIN(E2:E100)',
      desc: "Lowest inventory value देखनेकेलिए"
    },
    {
      label: "Average Inventory Value",
      code: '=AVERAGE(E2:E100)',
      desc: "Average inventory value calculate करनेकेलिए"
    },
    {
      label: "Total Product Count",
      code: '=COUNTA(B2:B100)',
      desc: "Total products count करनेकेलिए"
    },
    {
      label: "High Value Products",
      code: '=COUNTIF(E2:E100,">100000")',
      desc: "High value products count करनेकेलिए"
    },
    {
      label: "Inventory Status",
      code: '=IF(E2>=100000,"HIGH VALUE","NORMAL")',
      desc: "Inventory valuation status check करनेकेलिए"
    }
  ]
},

{
  id: 507,
  name: "BARCODE STOCK REPORT",
  icon: "🏷️",
  category: "Inventory",
  color: "#00838f",
  colorRgb: "rgba(0,131,143,0.25)",
  use: "Barcode based stock tracking और inventory scanning manage करनेकेलिए",
  tags: ["BARCODE","STOCK","SCAN","PRODUCT","INVENTORY"],
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
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Unscanned products count करनेकेलिए"
    },
    {
      label: "Available Barcode Stock",
      code: '=SUM(F2:F100)',
      desc: "Available barcode stock calculate करनेकेलिए"
    },
    {
      label: "Sold Barcode Stock",
      code: '=SUM(G2:G100)',
      desc: "Sold barcode stock calculate करनेकेलिए"
    },
    {
      label: "Remaining Barcode Stock",
      code: '=F2-G2',
      desc: "Remaining barcode stock calculate करनेकेलिए"
    },
    {
      label: "Highest Barcode Stock",
      code: '=MAX(H2:H100)',
      desc: "Highest barcode stock देखनेकेलिए"
    },
    {
      label: "Lowest Barcode Stock",
      code: '=MIN(H2:H100)',
      desc: "Lowest barcode stock देखनेकेलिए"
    },
    {
      label: "Average Barcode Stock",
      code: '=AVERAGE(H2:H100)',
      desc: "Average barcode stock calculate करनेकेलिए"
    },
    {
      label: "Barcode Status",
      code: '=IF(H2<10,"LOW STOCK","AVAILABLE")',
      desc: "Barcode stock status check करनेकेलिए"
    }
  ]
},

{
  id: 508,
  name: "PURCHASE STOCK REPORT",
  icon: "🛒",
  category: "Inventory",
  color: "#2e7d32",
  colorRgb: "rgba(46,125,50,0.25)",
  use: "Purchased stock, supplier products और inventory purchase records manage करनेकेलिए",
  tags: ["PURCHASE","STOCK","SUPPLIER","INVENTORY","PRODUCT"],
  formulas: [
    {
      label: "Total Purchased Products",
      code: '=COUNTA(B2:B100)',
      desc: "Purchased products count करनेकेलिए"
    },
    {
      label: "Purchased Quantity",
      code: '=SUM(E2:E100)',
      desc: "Purchased quantity calculate करनेकेलिए"
    },
    {
      label: "Purchase Amount",
      code: '=SUM(F2:F100)',
      desc: "Purchase amount calculate करनेकेलिए"
    },
    {
      label: "Paid Purchases",
      code: '=SUMIF(G2:G100,"PAID",F2:F100)',
      desc: "Paid purchase amount calculate करनेकेलिए"
    },
    {
      label: "Pending Purchases",
      code: '=SUMIF(G2:G100,"PENDING",F2:F100)',
      desc: "Pending purchase amount calculate करनेकेलिए"
    },
    {
      label: "Highest Purchase",
      code: '=MAX(F2:F100)',
      desc: "Highest purchase amount देखनेकेलिए"
    },
    {
      label: "Lowest Purchase",
      code: '=MIN(F2:F100)',
      desc: "Lowest purchase amount देखनेकेलिए"
    },
    {
      label: "Average Purchase",
      code: '=AVERAGE(F2:F100)',
      desc: "Average purchase amount calculate करनेकेलिए"
    },
    {
      label: "Supplier Count",
      code: '=COUNTA(H2:H100)',
      desc: "Suppliers count करनेकेलिए"
    },
    {
      label: "Purchase Status",
      code: '=IF(F2>=50000,"BULK PURCHASE","NORMAL")',
      desc: "Purchase stock status check करनेकेलिए"
    }
  ]
},

{
  id: 509,
  name: "SALES STOCK REPORT",
  icon: "📈",
  category: "Inventory",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Sold products, sales quantity और stock movement manage करनेकेलिए",
  tags: ["SALES","STOCK","PRODUCT","INVENTORY","ORDER"],
  formulas: [
    {
      label: "Total Sold Products",
      code: '=COUNTA(B2:B100)',
      desc: "Sold products count करनेकेलिए"
    },
    {
      label: "Sales Quantity",
      code: '=SUM(E2:E100)',
      desc: "Sales quantity calculate करनेकेलिए"
    },
    {
      label: "Sales Amount",
      code: '=SUM(F2:F100)',
      desc: "Sales amount calculate करनेकेलिए"
    },
    {
      label: "Online Sales",
      code: '=SUMIF(G2:G100,"ONLINE",F2:F100)',
      desc: "Online sales amount calculate करनेकेलिए"
    },
    {
      label: "Offline Sales",
      code: '=SUMIF(G2:G100,"OFFLINE",F2:F100)',
      desc: "Offline sales amount calculate करनेकेलिए"
    },
    {
      label: "Highest Sale",
      code: '=MAX(F2:F100)',
      desc: "Highest sales amount देखनेकेलिए"
    },
    {
      label: "Lowest Sale",
      code: '=MIN(F2:F100)',
      desc: "Lowest sales amount देखनेकेलिए"
    },
    {
      label: "Average Sale",
      code: '=AVERAGE(F2:F100)',
      desc: "Average sales amount calculate करनेकेलिए"
    },
    {
      label: "Returned Products",
      code: '=COUNTIF(H2:H100,"RETURN")',
      desc: "Returned sold products count करनेकेलिए"
    },
    {
      label: "Sales Status",
      code: '=IF(F2>=100000,"HIGH SALES","NORMAL")',
      desc: "Sales stock status check करनेकेलिए"
    }
  ]
},
        //INVENTORY REPORTS👆
  // Finance REPORT  👇
{
  id: 601,
  name: "INCOME REPORT",
  icon: "💵",
  category: "Finance",
  color: "#2e7d32",
  colorRgb: "rgba(46,125,50,0.25)",
  use: "Business income, earnings और revenue records manage करनेकेलिए",
  tags: ["INCOME","REVENUE","EARNING","FINANCE","PROFIT"],
  formulas: [
    {
      label: "Total Income",
      code: '=SUM(E2:E100)',
      desc: "Total income calculate करनेकेलिए"
    },
    {
      label: "Monthly Income",
      code: '=SUMIF(A2:A100,"JAN",E2:E100)',
      desc: "Monthly income calculate करनेकेलिए"
    },
    {
      label: "Highest Income",
      code: '=MAX(E2:E100)',
      desc: "Highest income amount देखनेकेलिए"
    },
    {
      label: "Lowest Income",
      code: '=MIN(E2:E100)',
      desc: "Lowest income amount देखनेकेलिए"
    },
    {
      label: "Average Income",
      code: '=AVERAGE(E2:E100)',
      desc: "Average income calculate करनेकेलिए"
    },
    {
      label: "Cash Income",
      code: '=SUMIF(F2:F100,"CASH",E2:E100)',
      desc: "Cash income calculate करनेकेलिए"
    },
    {
      label: "Online Income",
      code: '=SUMIF(F2:F100,"ONLINE",E2:E100)',
      desc: "Online income calculate करनेकेलिए"
    },
    {
      label: "Income Entries",
      code: '=COUNTA(B2:B100)',
      desc: "Income entries count करनेकेलिए"
    },
    {
      label: "Profit Margin",
      code: '=IF(G2>0,(E2-G2)/E2*100,0)',
      desc: "Profit margin percentage calculate करनेकेलिए"
    },
    {
      label: "Income Status",
      code: '=IF(E2>=100000,"HIGH INCOME","NORMAL")',
      desc: "Income status check करनेकेलिए"
    }
  ]
},

{
  id: 602,
  name: "EXPENSE REPORT",
  icon: "💸",
  category: "Finance",
  color: "#c62828",
  colorRgb: "rgba(198,40,40,0.25)",
  use: "Business expenses, payments और outgoing money track करनेकेलिए",
  tags: ["EXPENSE","PAYMENT","LOSS","FINANCE","COST"],
  formulas: [
    {
      label: "Total Expense",
      code: '=SUM(E2:E100)',
      desc: "Total expenses calculate करनेकेलिए"
    },
    {
      label: "Monthly Expense",
      code: '=SUMIF(A2:A100,"JAN",E2:E100)',
      desc: "Monthly expenses calculate करनेकेलिए"
    },
    {
      label: "Highest Expense",
      code: '=MAX(E2:E100)',
      desc: "Highest expense amount देखनेकेलिए"
    },
    {
      label: "Lowest Expense",
      code: '=MIN(E2:E100)',
      desc: "Lowest expense amount देखनेकेलिए"
    },
    {
      label: "Average Expense",
      code: '=AVERAGE(E2:E100)',
      desc: "Average expense calculate करनेकेलिए"
    },
    {
      label: "Paid Expense",
      code: '=SUMIF(F2:F100,"PAID",E2:E100)',
      desc: "Paid expenses calculate करनेकेलिए"
    },
    {
      label: "Pending Expense",
      code: '=SUMIF(F2:F100,"PENDING",E2:E100)',
      desc: "Pending expenses calculate करनेकेलिए"
    },
    {
      label: "Expense Entries",
      code: '=COUNTA(B2:B100)',
      desc: "Expense entries count करनेकेलिए"
    },
    {
      label: "Expense Ratio",
      code: '=IF(G2>0,E2/G2*100,0)',
      desc: "Expense ratio calculate करनेकेलिए"
    },
    {
      label: "Expense Status",
      code: '=IF(E2>=50000,"HIGH EXPENSE","NORMAL")',
      desc: "Expense status check करनेकेलिए"
    }
  ]
},

{
  id: 603,
  name: "BALANCE SHEET REPORT",
  icon: "📊",
  category: "Finance",
  color: "#1565c0",
  colorRgb: "rgba(21,101,192,0.25)",
  use: "Assets, liabilities और company financial position manage करनेकेलिए",
  tags: ["BALANCE","ASSET","LIABILITY","FINANCE","ACCOUNT"],
  formulas: [
    {
      label: "Total Assets",
      code: '=SUM(E2:E100)',
      desc: "Total assets calculate करनेकेलिए"
    },
    {
      label: "Total Liabilities",
      code: '=SUM(F2:F100)',
      desc: "Total liabilities calculate करनेकेलिए"
    },
    {
      label: "Net Worth",
      code: '=E2-F2',
      desc: "Net worth calculate करनेकेलिए"
    },
    {
      label: "Equity",
      code: '=SUM(G2:G100)',
      desc: "Total equity calculate करनेकेलिए"
    },
    {
      label: "Asset Ratio",
      code: '=IF(F2>0,E2/F2,0)',
      desc: "Asset liability ratio calculate करनेकेलिए"
    },
    {
      label: "Highest Asset",
      code: '=MAX(E2:E100)',
      desc: "Highest asset value देखनेकेलिए"
    },
    {
      label: "Lowest Liability",
      code: '=MIN(F2:F100)',
      desc: "Lowest liability value देखनेकेलिए"
    },
    {
      label: "Average Assets",
      code: '=AVERAGE(E2:E100)',
      desc: "Average assets calculate करनेकेलिए"
    },
    {
      label: "Balance Entries",
      code: '=COUNTA(B2:B100)',
      desc: "Balance sheet entries count करनेकेलिए"
    },
    {
      label: "Balance Status",
      code: '=IF(E2>F2,"PROFITABLE","LOSS")',
      desc: "Balance sheet financial status check करनेकेलिए"
    }
  ]
},

{
  id: 604,
  name: "CASH FLOW REPORT",
  icon: "💳",
  category: "Finance",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Cash inflow, outflow और business liquidity manage करनेकेलिए",
  tags: ["CASHFLOW","INFLOW","OUTFLOW","FINANCE","MONEY"],
  formulas: [
    {
      label: "Cash Inflow",
      code: '=SUM(E2:E100)',
      desc: "Cash inflow calculate करनेकेलिए"
    },
    {
      label: "Cash Outflow",
      code: '=SUM(F2:F100)',
      desc: "Cash outflow calculate करनेकेलिए"
    },
    {
      label: "Net Cash Flow",
      code: '=E2-F2',
      desc: "Net cash flow calculate करनेकेलिए"
    },
    {
      label: "Operating Cash Flow",
      code: '=SUM(G2:G100)',
      desc: "Operating cash flow calculate करनेकेलिए"
    },
    {
      label: "Investment Cash Flow",
      code: '=SUM(H2:H100)',
      desc: "Investment cash flow calculate करनेकेलिए"
    },
    {
      label: "Financing Cash Flow",
      code: '=SUM(I2:I100)',
      desc: "Financing cash flow calculate करनेकेलिए"
    },
    {
      label: "Highest Cash Inflow",
      code: '=MAX(E2:E100)',
      desc: "Highest inflow amount देखनेकेलिए"
    },
    {
      label: "Highest Cash Outflow",
      code: '=MAX(F2:F100)',
      desc: "Highest outflow amount देखनेकेलिए"
    },
    {
      label: "Average Cash Flow",
      code: '=AVERAGE(E2:E100)',
      desc: "Average cash flow calculate करनेकेलिए"
    },
    {
      label: "Cash Flow Status",
      code: '=IF(E2>F2,"POSITIVE","NEGATIVE")',
      desc: "Cash flow status check करनेकेलिए"
    }
  ]
},

{
  id: 605,
  name: "PROFIT & LOSS REPORT",
  icon: "📈",
  category: "Finance",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Business profit, loss और net earnings analyze करनेकेलिए",
  tags: ["PROFIT","LOSS","P&L","FINANCE","EARNING"],
  formulas: [
    {
      label: "Total Revenue",
      code: '=SUM(E2:E100)',
      desc: "Total revenue calculate करनेकेलिए"
    },
    {
      label: "Total Expenses",
      code: '=SUM(F2:F100)',
      desc: "Total expenses calculate करनेकेलिए"
    },
    {
      label: "Net Profit",
      code: '=E2-F2',
      desc: "Net profit calculate करनेकेलिए"
    },
    {
      label: "Profit Percentage",
      code: '=IF(F2>0,(E2-F2)/F2*100,0)',
      desc: "Profit percentage calculate करनेकेलिए"
    },
    {
      label: "Gross Profit",
      code: '=SUM(G2:G100)',
      desc: "Gross profit calculate करनेकेलिए"
    },
    {
      label: "Operating Profit",
      code: '=SUM(H2:H100)',
      desc: "Operating profit calculate करनेकेलिए"
    },
    {
      label: "Highest Revenue",
      code: '=MAX(E2:E100)',
      desc: "Highest revenue देखनेकेलिए"
    },
    {
      label: "Highest Expense",
      code: '=MAX(F2:F100)',
      desc: "Highest expense देखनेकेलिए"
    },
    {
      label: "Average Profit",
      code: '=AVERAGE(I2:I100)',
      desc: "Average profit calculate करनेकेलिए"
    },
    {
      label: "P&L Status",
      code: '=IF(E2>F2,"PROFIT","LOSS")',
      desc: "Profit & Loss status check करनेकेलिए"
    }
  ]
},
    {
  id: 606,
  name: "TAX REPORT",
  icon: "🧾",
  category: "Finance",
  color: "#8e24aa",
  colorRgb: "rgba(142,36,170,0.25)",
  use: "Business tax, payable tax और yearly tax records manage करनेकेलिए",
  tags: ["TAX","GST","FINANCE","PAYMENT","RETURN"],
  formulas: [
    {
      label: "Total Taxable Amount",
      code: '=SUM(E2:E100)',
      desc: "Total taxable amount calculate करनेकेलिए"
    },
    {
      label: "GST Amount",
      code: '=E2*18%',
      desc: "GST amount calculate करनेकेलिए"
    },
    {
      label: "CGST",
      code: '=F2/2',
      desc: "CGST amount calculate करनेकेलिए"
    },
    {
      label: "SGST",
      code: '=F2/2',
      desc: "SGST amount calculate करनेकेलिए"
    },
    {
      label: "Net Tax",
      code: '=SUM(F2:F100)',
      desc: "Net tax calculate करनेकेलिए"
    },
    {
      label: "Paid Tax",
      code: '=SUMIF(G2:G100,"PAID",F2:F100)',
      desc: "Paid tax calculate करनेकेलिए"
    },
    {
      label: "Pending Tax",
      code: '=SUMIF(G2:G100,"PENDING",F2:F100)',
      desc: "Pending tax calculate करनेकेलिए"
    },
    {
      label: "Highest Tax",
      code: '=MAX(F2:F100)',
      desc: "Highest tax amount देखनेकेलिए"
    },
    {
      label: "Average Tax",
      code: '=AVERAGE(F2:F100)',
      desc: "Average tax calculate करनेकेलिए"
    },
    {
      label: "Tax Status",
      code: '=IF(G2="PAID","CLEARED","PENDING")',
      desc: "Tax payment status check करनेकेलिए"
    }
  ]
},

{
  id: 607,
  name: "GST SUMMARY REPORT",
  icon: "📑",
  category: "Finance",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "GST collection, GST summary और business tax overview manage करनेकेलिए",
  tags: ["GST","SUMMARY","TAX","FINANCE","REPORT"],
  formulas: [
    {
      label: "Total GST Sales",
      code: '=SUM(E2:E100)',
      desc: "GST sales amount calculate करनेकेलिए"
    },
    {
      label: "GST Collected",
      code: '=SUM(F2:F100)',
      desc: "Collected GST calculate करनेकेलिए"
    },
    {
      label: "Input GST",
      code: '=SUM(G2:G100)',
      desc: "Input GST calculate करनेकेलिए"
    },
    {
      label: "Output GST",
      code: '=SUM(H2:H100)',
      desc: "Output GST calculate करनेकेलिए"
    },
    {
      label: "Net GST",
      code: '=H2-G2',
      desc: "Net GST calculate करनेकेलिए"
    },
    {
      label: "GST Return Filed",
      code: '=COUNTIF(I2:I100,"FILED")',
      desc: "Filed GST returns count करनेकेलिए"
    },
    {
      label: "Pending GST Return",
      code: '=COUNTIF(I2:I100,"PENDING")',
      desc: "Pending GST returns count करनेकेलिए"
    },
    {
      label: "Highest GST",
      code: '=MAX(F2:F100)',
      desc: "Highest GST amount देखनेकेलिए"
    },
    {
      label: "Average GST",
      code: '=AVERAGE(F2:F100)',
      desc: "Average GST amount calculate करनेकेलिए"
    },
    {
      label: "GST Status",
      code: '=IF(H2>G2,"PAYABLE","REFUND")',
      desc: "GST payable/refund status check करनेकेलिए"
    }
  ]
},

{
  id: 608,
  name: "BUDGET REPORT",
  icon: "📋",
  category: "Finance",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Budget planning, spending limits और financial targets manage करनेकेलिए",
  tags: ["BUDGET","PLAN","EXPENSE","FINANCE","LIMIT"],
  formulas: [
    {
      label: "Total Budget",
      code: '=SUM(E2:E100)',
      desc: "Total budget calculate करनेकेलिए"
    },
    {
      label: "Used Budget",
      code: '=SUM(F2:F100)',
      desc: "Used budget calculate करनेकेलिए"
    },
    {
      label: "Remaining Budget",
      code: '=E2-F2',
      desc: "Remaining budget calculate करनेकेलिए"
    },
    {
      label: "Budget Percentage Used",
      code: '=IF(E2>0,F2/E2*100,0)',
      desc: "Budget usage percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Budget",
      code: '=MAX(E2:E100)',
      desc: "Highest budget amount देखनेकेलिए"
    },
    {
      label: "Lowest Budget",
      code: '=MIN(E2:E100)',
      desc: "Lowest budget amount देखनेकेलिए"
    },
    {
      label: "Average Budget",
      code: '=AVERAGE(E2:E100)',
      desc: "Average budget calculate करनेकेलिए"
    },
    {
      label: "Over Budget Count",
      code: '=COUNTIF(G2:G100,">100")',
      desc: "Over budget entries count करनेकेलिए"
    },
    {
      label: "Budget Entries",
      code: '=COUNTA(B2:B100)',
      desc: "Budget entries count करनेकेलिए"
    },
    {
      label: "Budget Status",
      code: '=IF(F2>E2,"OVER BUDGET","UNDER CONTROL")',
      desc: "Budget status check करनेकेलिए"
    }
  ]
},

{
  id: 609,
  name: "INVESTMENT REPORT",
  icon: "💹",
  category: "Finance",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "Investments, returns और financial growth records manage करनेकेलिए",
  tags: ["INVESTMENT","RETURN","PROFIT","FINANCE","GROWTH"],
  formulas: [
    {
      label: "Total Investment",
      code: '=SUM(E2:E100)',
      desc: "Total investment calculate करनेकेलिए"
    },
    {
      label: "Return Amount",
      code: '=SUM(F2:F100)',
      desc: "Investment returns calculate करनेकेलिए"
    },
    {
      label: "Net Profit",
      code: '=F2-E2',
      desc: "Investment net profit calculate करनेकेलिए"
    },
    {
      label: "ROI Percentage",
      code: '=IF(E2>0,(F2-E2)/E2*100,0)',
      desc: "Return on investment percentage calculate करनेकेलिए"
    },
    {
      label: "Highest Investment",
      code: '=MAX(E2:E100)',
      desc: "Highest investment amount देखनेकेलिए"
    },
    {
      label: "Lowest Investment",
      code: '=MIN(E2:E100)',
      desc: "Lowest investment amount देखनेकेलिए"
    },
    {
      label: "Average Investment",
      code: '=AVERAGE(E2:E100)',
      desc: "Average investment calculate करनेकेलिए"
    },
    {
      label: "Profitable Investments",
      code: '=COUNTIF(G2:G100,">0")',
      desc: "Profitable investments count करनेकेलिए"
    },
    {
      label: "Loss Investments",
      code: '=COUNTIF(G2:G100,"<0")',
      desc: "Loss investments count करनेकेलिए"
    },
    {
      label: "Investment Status",
      code: '=IF(F2>E2,"PROFIT","LOSS")',
      desc: "Investment status check करनेकेलिए"
    }
  ]
},

{
  id: 610,
  name: "FINANCIAL SUMMARY REPORT",
  icon: "📈",
  category: "Finance",
  color: "#00838f",
  colorRgb: "rgba(0,131,143,0.25)",
  use: "Complete financial overview, business summary और yearly finance tracking करनेकेलिए",
  tags: ["FINANCIAL","SUMMARY","PROFIT","LOSS","REPORT"],
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
      label: "Net Profit",
      code: '=E2-F2',
      desc: "Net profit calculate करनेकेलिए"
    },
    {
      label: "Profit Percentage",
      code: '=IF(F2>0,(E2-F2)/F2*100,0)',
      desc: "Profit percentage calculate करनेकेलिए"
    },
    {
      label: "Cash Balance",
      code: '=SUM(G2:G100)',
      desc: "Cash balance calculate करनेकेलिए"
    },
    {
      label: "Investment Total",
      code: '=SUM(H2:H100)',
      desc: "Investment total calculate करनेकेलिए"
    },
    {
      label: "Tax Paid",
      code: '=SUM(I2:I100)',
      desc: "Total paid tax calculate करनेकेलिए"
    },
    {
      label: "Highest Income",
      code: '=MAX(E2:E100)',
      desc: "Highest income amount देखनेकेलिए"
    },
    {
      label: "Average Expense",
      code: '=AVERAGE(F2:F100)',
      desc: "Average expenses calculate करनेकेलिए"
    },
    {
      label: "Financial Status",
      code: '=IF(E2>F2,"PROFITABLE","LOSS")',
      desc: "Financial status check करनेकेलिए"
    }
  ]
}
,
   // Finance REPORT 👆
   // E-COMMERCE REPORTS 👇
    {
  id: 701,
  name: "ONLINE ORDER REPORT",
  icon: "🛒",
  category: "E-Commerce",
  color: "#1565c0",
  colorRgb: "rgba(21,101,192,0.25)",
  use: "Online orders, customer purchases और order tracking manage करनेकेलिए",
  tags: ["ORDER","ONLINE","ECOMMERCE","CUSTOMER","SALES"],
  formulas: [
    {
      label: "Total Orders",
      code: '=COUNTA(B2:B100)',
      desc: "Total online orders count करनेकेलिए"
    },
    {
      label: "Completed Orders",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed orders count करनेकेलिए"
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
      label: "Total Order Amount",
      code: '=SUM(F2:F100)',
      desc: "Total order amount calculate करनेकेलिए"
    },
    {
      label: "Highest Order",
      code: '=MAX(F2:F100)',
      desc: "Highest order amount देखनेकेलिए"
    },
    {
      label: "Lowest Order",
      code: '=MIN(F2:F100)',
      desc: "Lowest order amount देखनेकेलिए"
    },
    {
      label: "Average Order Value",
      code: '=AVERAGE(F2:F100)',
      desc: "Average order value calculate करनेकेलिए"
    },
    {
      label: "Online Payments",
      code: '=COUNTIF(G2:G100,"ONLINE")',
      desc: "Online payment orders count करनेकेलिए"
    },
    {
      label: "Order Status",
      code: '=IF(F2>=50000,"HIGH SALES","NORMAL")',
      desc: "Order sales status check करनेकेलिए"
    }
  ]
},

{
  id: 702,
  name: "CUSTOMER ORDER REPORT",
  icon: "👥",
  category: "E-Commerce",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Customer orders, repeat buyers और order history manage करनेकेलिए",
  tags: ["CUSTOMER","ORDER","BUYER","ECOMMERCE","HISTORY"],
  formulas: [
    {
      label: "Total Customers",
      code: '=COUNTA(B2:B100)',
      desc: "Total customers count करनेकेलिए"
    },
    {
      label: "Total Customer Orders",
      code: '=SUM(E2:E100)',
      desc: "Customer orders calculate करनेकेलिए"
    },
    {
      label: "Repeat Customers",
      code: '=COUNTIF(F2:F100,">1")',
      desc: "Repeat customers count करनेकेलिए"
    },
    {
      label: "New Customers",
      code: '=COUNTIF(F2:F100,"=1")',
      desc: "New customers count करनेकेलिए"
    },
    {
      label: "Highest Customer Orders",
      code: '=MAX(E2:E100)',
      desc: "Highest customer orders देखनेकेलिए"
    },
    {
      label: "Lowest Customer Orders",
      code: '=MIN(E2:E100)',
      desc: "Lowest customer orders देखनेकेलिए"
    },
    {
      label: "Average Customer Orders",
      code: '=AVERAGE(E2:E100)',
      desc: "Average customer orders calculate करनेकेलिए"
    },
    {
      label: "Total Revenue",
      code: '=SUM(G2:G100)',
      desc: "Customer revenue calculate करनेकेलिए"
    },
    {
      label: "Active Customers",
      code: '=COUNTIF(H2:H100,"ACTIVE")',
      desc: "Active customers count करनेकेलिए"
    },
    {
      label: "Customer Status",
      code: '=IF(G2>=10000,"VIP CUSTOMER","NORMAL")',
      desc: "Customer level status check करनेकेलिए"
    }
  ]
},

{
  id: 703,
  name: "PRODUCT SALES REPORT",
  icon: "📦",
  category: "E-Commerce",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Product sales, sold quantity और online revenue manage करनेकेलिए",
  tags: ["PRODUCT","SALES","ONLINE","REVENUE","STOCK"],
  formulas: [
    {
      label: "Total Products Sold",
      code: '=SUM(E2:E100)',
      desc: "Total sold products calculate करनेकेलिए"
    },
    {
      label: "Sales Revenue",
      code: '=SUM(F2:F100)',
      desc: "Sales revenue calculate करनेकेलिए"
    },
    {
      label: "Highest Selling Product",
      code: '=MAX(E2:E100)',
      desc: "Highest selling product quantity देखनेकेलिए"
    },
    {
      label: "Lowest Selling Product",
      code: '=MIN(E2:E100)',
      desc: "Lowest selling product quantity देखनेकेलिए"
    },
    {
      label: "Average Product Sales",
      code: '=AVERAGE(E2:E100)',
      desc: "Average product sales calculate करनेकेलिए"
    },
    {
      label: "Online Sales",
      code: '=SUMIF(G2:G100,"ONLINE",F2:F100)',
      desc: "Online sales amount calculate करनेकेलिए"
    },
    {
      label: "COD Sales",
      code: '=SUMIF(G2:G100,"COD",F2:F100)',
      desc: "Cash on delivery sales calculate करनेकेलिए"
    },
    {
      label: "Returned Products",
      code: '=COUNTIF(H2:H100,"RETURNED")',
      desc: "Returned products count करनेकेलिए"
    },
    {
      label: "Profit Margin",
      code: '=IF(F2>0,(F2-I2)/F2*100,0)',
      desc: "Profit margin calculate करनेकेलिए"
    },
    {
      label: "Sales Status",
      code: '=IF(F2>=100000,"BEST SELLER","NORMAL")',
      desc: "Sales performance status check करनेकेलिए"
    }
  ]
},

{
  id: 704,
  name: "RETURN ORDER REPORT",
  icon: "↩️",
  category: "E-Commerce",
  color: "#c62828",
  colorRgb: "rgba(198,40,40,0.25)",
  use: "Returned orders, refunds और damaged product tracking करनेकेलिए",
  tags: ["RETURN","REFUND","ORDER","ECOMMERCE","PRODUCT"],
  formulas: [
    {
      label: "Total Return Orders",
      code: '=COUNTA(B2:B100)',
      desc: "Returned orders count करनेकेलिए"
    },
    {
      label: "Refund Amount",
      code: '=SUM(E2:E100)',
      desc: "Refund amount calculate करनेकेलिए"
    },
    {
      label: "Approved Returns",
      code: '=COUNTIF(F2:F100,"APPROVED")',
      desc: "Approved returns count करनेकेलिए"
    },
    {
      label: "Rejected Returns",
      code: '=COUNTIF(F2:F100,"REJECTED")',
      desc: "Rejected returns count करनेकेलिए"
    },
    {
      label: "Damaged Returns",
      code: '=COUNTIF(G2:G100,"DAMAGED")',
      desc: "Damaged returned products count करनेकेलिए"
    },
    {
      label: "Wrong Product Returns",
      code: '=COUNTIF(G2:G100,"WRONG PRODUCT")',
      desc: "Wrong product returns count करनेकेलिए"
    },
    {
      label: "Highest Refund",
      code: '=MAX(E2:E100)',
      desc: "Highest refund amount देखनेकेलिए"
    },
    {
      label: "Average Refund",
      code: '=AVERAGE(E2:E100)',
      desc: "Average refund amount calculate करनेकेलिए"
    },
    {
      label: "Pending Refunds",
      code: '=COUNTIF(H2:H100,"PENDING")',
      desc: "Pending refunds count करनेकेलिए"
    },
    {
      label: "Return Status",
      code: '=IF(E2>=5000,"HIGH RETURN","NORMAL")',
      desc: "Return order status check करनेकेलिए"
    }
  ]
},

{
  id: 705,
  name: "PAYMENT REPORT",
  icon: "💳",
  category: "E-Commerce",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Online payments, transactions और payment methods manage करनेकेलिए",
  tags: ["PAYMENT","ONLINE","TRANSACTION","ECOMMERCE","MONEY"],
  formulas: [
    {
      label: "Total Payments",
      code: '=SUM(E2:E100)',
      desc: "Total payments calculate करनेकेलिए"
    },
    {
      label: "Successful Payments",
      code: '=COUNTIF(F2:F100,"SUCCESS")',
      desc: "Successful payments count करनेकेलिए"
    },
    {
      label: "Failed Payments",
      code: '=COUNTIF(F2:F100,"FAILED")',
      desc: "Failed payments count करनेकेलिए"
    },
    {
      label: "Pending Payments",
      code: '=COUNTIF(F2:F100,"PENDING")',
      desc: "Pending payments count करनेकेलिए"
    },
    {
      label: "UPI Payments",
      code: '=SUMIF(G2:G100,"UPI",E2:E100)',
      desc: "UPI payments calculate करनेकेलिए"
    },
    {
      label: "Card Payments",
      code: '=SUMIF(G2:G100,"CARD",E2:E100)',
      desc: "Card payments calculate करनेकेलिए"
    },
    {
      label: "COD Payments",
      code: '=SUMIF(G2:G100,"COD",E2:E100)',
      desc: "Cash on delivery payments calculate करनेकेलिए"
    },
    {
      label: "Highest Payment",
      code: '=MAX(E2:E100)',
      desc: "Highest payment amount देखनेकेलिए"
    },
    {
      label: "Average Payment",
      code: '=AVERAGE(E2:E100)',
      desc: "Average payment calculate करनेकेलिए"
    },
    {
      label: "Payment Status",
      code: '=IF(E2>=100000,"HIGH PAYMENT","NORMAL")',
      desc: "Payment status check करनेकेलिए"
    }
  ]
},
    {
  id: 706,
  name: "COUPON REPORT",
  icon: "🎟️",
  category: "E-Commerce",
  color: "#ff7043",
  colorRgb: "rgba(255,112,67,0.25)",
  use: "Discount coupons, promo codes और coupon usage track करनेकेलिए",
  tags: ["COUPON","DISCOUNT","PROMO","SALE","ECOMMERCE"],
  formulas: [
    {
      label: "Total Coupons",
      code: '=COUNTA(B2:B100)',
      desc: "Total coupons count करनेकेलिए"
    },
    {
      label: "Used Coupons",
      code: '=COUNTIF(E2:E100,"USED")',
      desc: "Used coupons count करनेकेलिए"
    },
    {
      label: "Unused Coupons",
      code: '=COUNTIF(E2:E100,"UNUSED")',
      desc: "Unused coupons count करनेकेलिए"
    },
    {
      label: "Expired Coupons",
      code: '=COUNTIF(E2:E100,"EXPIRED")',
      desc: "Expired coupons count करनेकेलिए"
    },
    {
      label: "Discount Amount",
      code: '=SUM(F2:F100)',
      desc: "Total discount amount calculate करनेकेलिए"
    },
    {
      label: "Highest Discount",
      code: '=MAX(F2:F100)',
      desc: "Highest coupon discount देखनेकेलिए"
    },
    {
      label: "Average Discount",
      code: '=AVERAGE(F2:F100)',
      desc: "Average coupon discount calculate करनेकेलिए"
    },
    {
      label: "Coupon Success Rate",
      code: '=IF(COUNTA(B2:B100)>0,COUNTIF(E2:E100,"USED")/COUNTA(B2:B100)*100,0)',
      desc: "Coupon success percentage calculate करनेकेलिए"
    },
    {
      label: "Active Coupons",
      code: '=COUNTIF(G2:G100,"ACTIVE")',
      desc: "Active coupons count करनेकेलिए"
    },
    {
      label: "Coupon Status",
      code: '=IF(F2>=5000,"HIGH DISCOUNT","NORMAL")',
      desc: "Coupon discount status check करनेकेलिए"
    }
  ]
},

{
  id: 707,
  name: "DELIVERY REPORT",
  icon: "🚚",
  category: "E-Commerce",
  color: "#00838f",
  colorRgb: "rgba(0,131,143,0.25)",
  use: "Product delivery, shipping status और delivery performance manage करनेकेलिए",
  tags: ["DELIVERY","SHIPPING","TRACKING","ORDER","ECOMMERCE"],
  formulas: [
    {
      label: "Total Deliveries",
      code: '=COUNTA(B2:B100)',
      desc: "Total deliveries count करनेकेलिए"
    },
    {
      label: "Delivered Orders",
      code: '=COUNTIF(E2:E100,"DELIVERED")',
      desc: "Delivered orders count करनेकेलिए"
    },
    {
      label: "Pending Deliveries",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending deliveries count करनेकेलिए"
    },
    {
      label: "Cancelled Deliveries",
      code: '=COUNTIF(E2:E100,"CANCELLED")',
      desc: "Cancelled deliveries count करनेकेलिए"
    },
    {
      label: "Delivery Charges",
      code: '=SUM(F2:F100)',
      desc: "Total delivery charges calculate करनेकेलिए"
    },
    {
      label: "Fast Deliveries",
      code: '=COUNTIF(G2:G100,"FAST")',
      desc: "Fast deliveries count करनेकेलिए"
    },
    {
      label: "Late Deliveries",
      code: '=COUNTIF(G2:G100,"LATE")',
      desc: "Late deliveries count करनेकेलिए"
    },
    {
      label: "Average Delivery Cost",
      code: '=AVERAGE(F2:F100)',
      desc: "Average delivery cost calculate करनेकेलिए"
    },
    {
      label: "Highest Delivery Charge",
      code: '=MAX(F2:F100)',
      desc: "Highest delivery charge देखनेकेलिए"
    },
    {
      label: "Delivery Status",
      code: '=IF(E2="DELIVERED","SUCCESS","PENDING")',
      desc: "Delivery status check करनेकेलिए"
    }
  ]
},

{
  id: 708,
  name: "AFFILIATE REPORT",
  icon: "🤝",
  category: "E-Commerce",
  color: "#5e35b1",
  colorRgb: "rgba(94,53,177,0.25)",
  use: "Affiliate partners, commissions और referral sales track करनेकेलिए",
  tags: ["AFFILIATE","COMMISSION","REFERRAL","SALE","PARTNER"],
  formulas: [
    {
      label: "Total Affiliates",
      code: '=COUNTA(B2:B100)',
      desc: "Total affiliate partners count करनेकेलिए"
    },
    {
      label: "Affiliate Sales",
      code: '=SUM(E2:E100)',
      desc: "Affiliate sales calculate करनेकेलिए"
    },
    {
      label: "Commission Amount",
      code: '=SUM(F2:F100)',
      desc: "Commission amount calculate करनेकेलिए"
    },
    {
      label: "Top Affiliate Sales",
      code: '=MAX(E2:E100)',
      desc: "Top affiliate sales देखनेकेलिए"
    },
    {
      label: "Lowest Affiliate Sales",
      code: '=MIN(E2:E100)',
      desc: "Lowest affiliate sales देखनेकेलिए"
    },
    {
      label: "Average Affiliate Sales",
      code: '=AVERAGE(E2:E100)',
      desc: "Average affiliate sales calculate करनेकेलिए"
    },
    {
      label: "Paid Commission",
      code: '=SUMIF(G2:G100,"PAID",F2:F100)',
      desc: "Paid commissions calculate करनेकेलिए"
    },
    {
      label: "Pending Commission",
      code: '=SUMIF(G2:G100,"PENDING",F2:F100)',
      desc: "Pending commissions calculate करनेकेलिए"
    },
    {
      label: "Affiliate Success Rate",
      code: '=IF(COUNTA(B2:B100)>0,COUNTIF(H2:H100,"ACTIVE")/COUNTA(B2:B100)*100,0)',
      desc: "Affiliate success percentage calculate करनेकेलिए"
    },
    {
      label: "Affiliate Status",
      code: '=IF(E2>=50000,"TOP AFFILIATE","NORMAL")',
      desc: "Affiliate performance status check करनेकेलिए"
    }
  ]
},

{
  id: 709,
  name: "CART ABANDON REPORT",
  icon: "🛍️",
  category: "E-Commerce",
  color: "#d81b60",
  colorRgb: "rgba(216,27,96,0.25)",
  use: "Abandoned carts, incomplete orders और customer behavior analysis करनेकेलिए",
  tags: ["CART","ABANDON","ORDER","CUSTOMER","ECOMMERCE"],
  formulas: [
    {
      label: "Total Carts",
      code: '=COUNTA(B2:B100)',
      desc: "Total carts count करनेकेलिए"
    },
    {
      label: "Abandoned Carts",
      code: '=COUNTIF(E2:E100,"ABANDONED")',
      desc: "Abandoned carts count करनेकेलिए"
    },
    {
      label: "Recovered Carts",
      code: '=COUNTIF(E2:E100,"RECOVERED")',
      desc: "Recovered carts count करनेकेलिए"
    },
    {
      label: "Completed Orders",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed cart orders count करनेकेलिए"
    },
    {
      label: "Cart Value",
      code: '=SUM(F2:F100)',
      desc: "Total abandoned cart value calculate करनेकेलिए"
    },
    {
      label: "Highest Cart Value",
      code: '=MAX(F2:F100)',
      desc: "Highest cart value देखनेकेलिए"
    },
    {
      label: "Average Cart Value",
      code: '=AVERAGE(F2:F100)',
      desc: "Average cart value calculate करनेकेलिए"
    },
    {
      label: "Recovery Percentage",
      code: '=IF(COUNTIF(E2:E100,"ABANDONED")>0,COUNTIF(E2:E100,"RECOVERED")/COUNTIF(E2:E100,"ABANDONED")*100,0)',
      desc: "Cart recovery percentage calculate करनेकेलिए"
    },
    {
      label: "Lost Revenue",
      code: '=SUMIF(E2:E100,"ABANDONED",F2:F100)',
      desc: "Lost revenue calculate करनेकेलिए"
    },
    {
      label: "Cart Status",
      code: '=IF(F2>=10000,"HIGH VALUE CART","NORMAL")',
      desc: "Cart value status check करनेकेलिए"
    }
  ]
},
    // E-COMMERCE REPORTS 👆
    // MOBILE SHOP REPORTS 👇
    {
  id: 801,
  name: "MOBILE SALES REPORT",
  icon: "📱",
  category: "Mobile Shop",
  color: "#1e88e5",
  colorRgb: "rgba(30,136,229,0.25)",
  use: "Mobile phone sales, revenue और stock tracking करनेकेलिए",
  tags: ["MOBILE","SALES","SHOP","STOCK","REVENUE"],
  formulas: [
    {
      label: "Total Mobiles Sold",
      code: '=SUM(E2:E100)',
      desc: "Total sold mobiles calculate करनेकेलिए"
    },
    {
      label: "Total Sales Revenue",
      code: '=SUM(F2:F100)',
      desc: "Mobile sales revenue calculate करनेकेलिए"
    },
    {
      label: "Highest Mobile Sale",
      code: '=MAX(F2:F100)',
      desc: "Highest mobile sale amount देखनेकेलिए"
    },
    {
      label: "Lowest Mobile Sale",
      code: '=MIN(F2:F100)',
      desc: "Lowest mobile sale amount देखनेकेलिए"
    },
    {
      label: "Average Sale Value",
      code: '=AVERAGE(F2:F100)',
      desc: "Average mobile sale calculate करनेकेलिए"
    },
    {
      label: "Samsung Sales",
      code: '=SUMIF(G2:G100,"SAMSUNG",F2:F100)',
      desc: "Samsung mobile sales calculate करनेकेलिए"
    },
    {
      label: "Vivo Sales",
      code: '=SUMIF(G2:G100,"VIVO",F2:F100)',
      desc: "Vivo mobile sales calculate करनेकेलिए"
    },
    {
      label: "iPhone Sales",
      code: '=SUMIF(G2:G100,"IPHONE",F2:F100)',
      desc: "iPhone sales calculate करनेकेलिए"
    },
    {
      label: "Profit Margin",
      code: '=IF(F2>0,(F2-H2)/F2*100,0)',
      desc: "Profit margin percentage calculate करनेकेलिए"
    },
    {
      label: "Sales Status",
      code: '=IF(F2>=100000,"HIGH SALES","NORMAL")',
      desc: "Sales performance status check करनेकेलिए"
    }
  ]
},

{
  id: 802,
  name: "IMEI REPORT",
  icon: "🔢",
  category: "Mobile Shop",
  color: "#8e24aa",
  colorRgb: "rgba(142,36,170,0.25)",
  use: "IMEI numbers, device tracking और mobile verification manage करनेकेलिए",
  tags: ["IMEI","MOBILE","TRACKING","DEVICE","SECURITY"],
  formulas: [
    {
      label: "Total IMEI Records",
      code: '=COUNTA(B2:B100)',
      desc: "Total IMEI records count करनेकेलिए"
    },
    {
      label: "Valid IMEI",
      code: '=COUNTIF(E2:E100,"VALID")',
      desc: "Valid IMEI numbers count करनेकेलिए"
    },
    {
      label: "Invalid IMEI",
      code: '=COUNTIF(E2:E100,"INVALID")',
      desc: "Invalid IMEI numbers count करनेकेलिए"
    },
    {
      label: "Duplicate IMEI",
      code: '=COUNTIF(F2:F100,"DUPLICATE")',
      desc: "Duplicate IMEI numbers count करनेकेलिए"
    },
    {
      label: "Activated Devices",
      code: '=COUNTIF(G2:G100,"ACTIVE")',
      desc: "Activated mobile devices count करनेकेलिए"
    },
    {
      label: "Blocked Devices",
      code: '=COUNTIF(G2:G100,"BLOCKED")',
      desc: "Blocked mobile devices count करनेकेलिए"
    },
    {
      label: "Sold Devices",
      code: '=COUNTIF(H2:H100,"SOLD")',
      desc: "Sold devices count करनेकेलिए"
    },
    {
      label: "Unsold Devices",
      code: '=COUNTIF(H2:H100,"UNSOLD")',
      desc: "Unsold devices count करनेकेलिए"
    },
    {
      label: "IMEI Verification %",
      code: '=IF(COUNTA(B2:B100)>0,COUNTIF(E2:E100,"VALID")/COUNTA(B2:B100)*100,0)',
      desc: "IMEI verification percentage calculate करनेकेलिए"
    },
    {
      label: "IMEI Status",
      code: '=IF(E2="VALID","SAFE","CHECK DEVICE")',
      desc: "IMEI security status check करनेकेलिए"
    }
  ]
},

{
  id: 803,
  name: "REPAIR REPORT",
  icon: "🛠️",
  category: "Mobile Shop",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Mobile repair jobs, service charges और repair tracking करनेकेलिए",
  tags: ["REPAIR","SERVICE","MOBILE","TECHNICIAN","SHOP"],
  formulas: [
    {
      label: "Total Repairs",
      code: '=COUNTA(B2:B100)',
      desc: "Total repair jobs count करनेकेलिए"
    },
    {
      label: "Completed Repairs",
      code: '=COUNTIF(E2:E100,"COMPLETED")',
      desc: "Completed repairs count करनेकेलिए"
    },
    {
      label: "Pending Repairs",
      code: '=COUNTIF(E2:E100,"PENDING")',
      desc: "Pending repairs count करनेकेलिए"
    },
    {
      label: "Repair Charges",
      code: '=SUM(F2:F100)',
      desc: "Total repair charges calculate करनेकेलिए"
    },
    {
      label: "Highest Repair Bill",
      code: '=MAX(F2:F100)',
      desc: "Highest repair bill देखनेकेलिए"
    },
    {
      label: "Average Repair Bill",
      code: '=AVERAGE(F2:F100)',
      desc: "Average repair bill calculate करनेकेलिए"
    },
    {
      label: "Screen Repairs",
      code: '=COUNTIF(G2:G100,"SCREEN")',
      desc: "Screen repairs count करनेकेलिए"
    },
    {
      label: "Battery Repairs",
      code: '=COUNTIF(G2:G100,"BATTERY")',
      desc: "Battery repairs count करनेकेलिए"
    },
    {
      label: "Repair Profit",
      code: '=SUM(H2:H100)',
      desc: "Repair profit calculate करनेकेलिए"
    },
    {
      label: "Repair Status",
      code: '=IF(F2>=5000,"HIGH VALUE REPAIR","NORMAL")',
      desc: "Repair value status check करनेकेलिए"
    }
  ]
},

{
  id: 804,
  name: "WARRANTY REPORT",
  icon: "🛡️",
  category: "Mobile Shop",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Mobile warranty tracking, claims और warranty expiry manage करनेकेलिए",
  tags: ["WARRANTY","CLAIM","MOBILE","SERVICE","TRACKING"],
  formulas: [
    {
      label: "Total Warranty Devices",
      code: '=COUNTA(B2:B100)',
      desc: "Warranty devices count करनेकेलिए"
    },
    {
      label: "Active Warranty",
      code: '=COUNTIF(E2:E100,"ACTIVE")',
      desc: "Active warranties count करनेकेलिए"
    },
    {
      label: "Expired Warranty",
      code: '=COUNTIF(E2:E100,"EXPIRED")',
      desc: "Expired warranties count करनेकेलिए"
    },
    {
      label: "Warranty Claims",
      code: '=COUNTIF(F2:F100,"CLAIMED")',
      desc: "Warranty claims count करनेकेलिए"
    },
    {
      label: "Pending Claims",
      code: '=COUNTIF(F2:F100,"PENDING")',
      desc: "Pending warranty claims count करनेकेलिए"
    },
    {
      label: "Claim Approved",
      code: '=COUNTIF(G2:G100,"APPROVED")',
      desc: "Approved warranty claims count करनेकेलिए"
    },
    {
      label: "Claim Rejected",
      code: '=COUNTIF(G2:G100,"REJECTED")',
      desc: "Rejected warranty claims count करनेकेलिए"
    },
    {
      label: "Warranty Charges",
      code: '=SUM(H2:H100)',
      desc: "Warranty charges calculate करनेकेलिए"
    },
    {
      label: "Warranty Percentage",
      code: '=IF(COUNTA(B2:B100)>0,COUNTIF(E2:E100,"ACTIVE")/COUNTA(B2:B100)*100,0)',
      desc: "Warranty percentage calculate करनेकेलिए"
    },
    {
      label: "Warranty Status",
      code: '=IF(E2="ACTIVE","SAFE","EXPIRED")',
      desc: "Warranty status check करनेकेलिए"
    }
  ]
},

{
  id: 805,
  name: "ACCESSORY REPORT",
  icon: "🎧",
  category: "Mobile Shop",
  color: "#d81b60",
  colorRgb: "rgba(216,27,96,0.25)",
  use: "Mobile accessories sales, stock और revenue manage करनेकेलिए",
  tags: ["ACCESSORY","MOBILE","SALES","STOCK","SHOP"],
  formulas: [
    {
      label: "Total Accessories Sold",
      code: '=SUM(E2:E100)',
      desc: "Total sold accessories calculate करनेकेलिए"
    },
    {
      label: "Accessory Revenue",
      code: '=SUM(F2:F100)',
      desc: "Accessory revenue calculate करनेकेलिए"
    },
    {
      label: "Highest Accessory Sale",
      code: '=MAX(F2:F100)',
      desc: "Highest accessory sale देखनेकेलिए"
    },
    {
      label: "Lowest Accessory Sale",
      code: '=MIN(F2:F100)',
      desc: "Lowest accessory sale देखनेकेलिए"
    },
    {
      label: "Average Accessory Sale",
      code: '=AVERAGE(F2:F100)',
      desc: "Average accessory sale calculate करनेकेलिए"
    },
    {
      label: "Charger Sales",
      code: '=COUNTIF(G2:G100,"CHARGER")',
      desc: "Charger sales count करनेकेलिए"
    },
    {
      label: "Earphone Sales",
      code: '=COUNTIF(G2:G100,"EARPHONE")',
      desc: "Earphone sales count करनेकेलिए"
    },
    {
      label: "Cover Sales",
      code: '=COUNTIF(G2:G100,"COVER")',
      desc: "Mobile cover sales count करनेकेलिए"
    },
    {
      label: "Accessory Profit",
      code: '=SUM(H2:H100)',
      desc: "Accessory profit calculate करनेकेलिए"
    },
    {
      label: "Accessory Status",
      code: '=IF(F2>=20000,"HIGH SALES","NORMAL")',
      desc: "Accessory sales status check करनेकेलिए"
    }
  ]
},
    {
  id: 806,
  name: "RECHARGE REPORT",
  icon: "🔋",
  category: "Mobile Shop",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Mobile recharge transactions, operator wise income और commission tracking",
  tags: ["RECHARGE","MOBILE","BALANCE","OPERATOR","INCOME"],
  formulas: [
    { label: "Total Recharges", code: '=COUNTA(B2:B100)', desc: "Total recharge entries" },
    { label: "Total Recharge Amount", code: '=SUM(E2:E100)', desc: "Total recharge income" },
    { label: "Highest Recharge", code: '=MAX(E2:E100)', desc: "Highest recharge value" },
    { label: "Lowest Recharge", code: '=MIN(E2:E100)', desc: "Lowest recharge value" },
    { label: "Average Recharge", code: '=AVERAGE(E2:E100)', desc: "Average recharge amount" },
    { label: "Airtel Recharge", code: '=SUMIF(F2:F100,"AIRTEL",E2:E100)', desc: "Airtel recharge total" },
    { label: "Jio Recharge", code: '=SUMIF(F2:F100,"JIO",E2:E100)', desc: "Jio recharge total" },
    { label: "Vi Recharge", code: '=SUMIF(F2:F100,"VI",E2:E100)', desc: "Vi recharge total" },
    { label: "Commission Earned", code: '=SUM(G2:G100)', desc: "Total commission earned" },
    { label: "Recharge Status", code: '=IF(E2>=500,"HIGH VALUE","NORMAL")', desc: "Recharge performance status" }
  ]
},

{
  id: 807,
  name: "SIM ACTIVATION REPORT",
  icon: "📶",
  category: "Mobile Shop",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "SIM activation, verification और new SIM tracking system",
  tags: ["SIM","ACTIVATION","MOBILE","VERIFICATION","KYC"],
  formulas: [
    { label: "Total SIMs", code: '=COUNTA(B2:B100)', desc: "Total SIM entries" },
    { label: "Activated SIMs", code: '=COUNTIF(E2:E100,"ACTIVE")', desc: "Activated SIM count" },
    { label: "Pending SIMs", code: '=COUNTIF(E2:E100,"PENDING")', desc: "Pending SIM activation" },
    { label: "Rejected SIMs", code: '=COUNTIF(E2:E100,"REJECTED")', desc: "Rejected SIM applications" },
    { label: "Jio SIM", code: '=COUNTIF(F2:F100,"JIO")', desc: "Jio SIM count" },
    { label: "Airtel SIM", code: '=COUNTIF(F2:F100,"AIRTEL")', desc: "Airtel SIM count" },
    { label: "Vi SIM", code: '=COUNTIF(F2:F100,"VI")', desc: "Vi SIM count" },
    { label: "Total Revenue", code: '=SUM(G2:G100)', desc: "SIM activation revenue" },
    { label: "Average Revenue", code: '=AVERAGE(G2:G100)', desc: "Average SIM revenue" },
    { label: "SIM Status", code: '=IF(E2="ACTIVE","SUCCESS","CHECK")', desc: "SIM activation status" }
  ]
},

{
  id: 808,
  name: "MOBILE SHOP SUMMARY REPORT",
  icon: "📊",
  category: "Mobile Shop",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Complete mobile shop performance overview and business summary",
  tags: ["SUMMARY","MOBILE","BUSINESS","REPORT","ANALYTICS"],
  formulas: [
    { label: "Total Revenue", code: '=SUM(E2:E100)', desc: "Total shop revenue" },
    { label: "Total Profit", code: '=SUM(F2:F100)', desc: "Total profit calculation" },
    { label: "Total Sales", code: '=SUM(G2:G100)', desc: "All sales combined" },
    { label: "Total Customers", code: '=COUNTA(B2:B100)', desc: "Customer count" },
    { label: "Highest Sale", code: '=MAX(E2:E100)', desc: "Highest transaction" },
    { label: "Lowest Sale", code: '=MIN(E2:E100)', desc: "Lowest transaction" },
    { label: "Average Sale", code: '=AVERAGE(E2:E100)', desc: "Average sale value" },
    { label: "Best Product", code: '=INDEX(C2:C100,MATCH(MAX(E2:E100),E2:E100,0))', desc: "Best selling product" },
    { label: "Total Transactions", code: '=COUNTA(E2:E100)', desc: "Total transactions" },
    { label: "Business Status", code: '=IF(F2>0,"PROFIT","LOSS")', desc: "Business performance status" }
  ]
},
// MOBILE SHOP REPORTS 👆
    // RESTAURANT REPORTS 👇
    {
  id: 901,
  name: "FOOD SALES REPORT",
  icon: "🍽️",
  category: "Restaurant",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Restaurant food sales, revenue और item wise sales tracking करनेकेलिए",
  tags: ["FOOD","SALES","RESTAURANT","REVENUE","ITEM"],
  formulas: [
    { label: "Total Food Orders", code: '=COUNTA(B2:B100)', desc: "Total food orders count" },
    { label: "Total Sales", code: '=SUM(E2:E100)', desc: "Total food sales revenue" },
    { label: "Highest Sale", code: '=MAX(E2:E100)', desc: "Highest order value" },
    { label: "Lowest Sale", code: '=MIN(E2:E100)', desc: "Lowest order value" },
    { label: "Average Sale", code: '=AVERAGE(E2:E100)', desc: "Average food sale value" },
    { label: "Veg Sales", code: '=SUMIF(F2:F100,"VEG",E2:E100)', desc: "Veg food sales total" },
    { label: "Non-Veg Sales", code: '=SUMIF(F2:F100,"NON-VEG",E2:E100)', desc: "Non-veg food sales total" },
    { label: "Online Orders", code: '=COUNTIF(G2:G100,"ONLINE")', desc: "Online food orders count" },
    { label: "Cash Orders", code: '=COUNTIF(G2:G100,"CASH")', desc: "Cash orders count" },
    { label: "Sales Status", code: '=IF(E2>=5000,"HIGH SALE","NORMAL")', desc: "Sales performance status" }
  ]
},

{
  id: 902,
  name: "TABLE BOOKING REPORT",
  icon: "🪑",
  category: "Restaurant",
  color: "#fb8c00",
  colorRgb: "rgba(251,140,0,0.25)",
  use: "Restaurant table reservations और booking management करनेकेलिए",
  tags: ["TABLE","BOOKING","RESERVATION","CUSTOMER","RESTAURANT"],
  formulas: [
    { label: "Total Bookings", code: '=COUNTA(B2:B100)', desc: "Total table bookings" },
    { label: "Confirmed Bookings", code: '=COUNTIF(E2:E100,"CONFIRMED")', desc: "Confirmed bookings" },
    { label: "Cancelled Bookings", code: '=COUNTIF(E2:E100,"CANCELLED")', desc: "Cancelled bookings" },
    { label: "Pending Bookings", code: '=COUNTIF(E2:E100,"PENDING")', desc: "Pending bookings" },
    { label: "VIP Bookings", code: '=COUNTIF(F2:F100,"VIP")', desc: "VIP table bookings" },
    { label: "Regular Bookings", code: '=COUNTIF(F2:F100,"REGULAR")', desc: "Regular bookings" },
    { label: "Highest Booking", code: '=MAX(G2:G100)', desc: "Highest booking value" },
    { label: "Average Booking", code: '=AVERAGE(G2:G100)', desc: "Average booking value" },
    { label: "Booking Revenue", code: '=SUM(G2:G100)', desc: "Total booking revenue" },
    { label: "Booking Status", code: '=IF(E2="CONFIRMED","SUCCESS","CHECK")', desc: "Booking status check" }
  ]
},

{
  id: 903,
  name: "CUSTOMER REPORT",
  icon: "👨‍🍳",
  category: "Restaurant",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Restaurant customers, visits और customer behavior tracking करनेकेलिए",
  tags: ["CUSTOMER","RESTAURANT","VISIT","DATA","REPORT"],
  formulas: [
    { label: "Total Customers", code: '=COUNTA(B2:B100)', desc: "Total customers count" },
    { label: "New Customers", code: '=COUNTIF(E2:E100,"NEW")', desc: "New customers count" },
    { label: "Regular Customers", code: '=COUNTIF(E2:E100,"REGULAR")', desc: "Regular customers count" },
    { label: "VIP Customers", code: '=COUNTIF(E2:E100,"VIP")', desc: "VIP customers count" },
    { label: "Total Visits", code: '=SUM(F2:F100)', desc: "Total customer visits" },
    { label: "Highest Spending", code: '=MAX(G2:G100)', desc: "Highest customer spending" },
    { label: "Average Spending", code: '=AVERAGE(G2:G100)', desc: "Average spending per customer" },
    { label: "Repeat Customers", code: '=COUNTIF(F2:F100,">1")', desc: "Repeat customer count" },
    { label: "Total Revenue", code: '=SUM(G2:G100)', desc: "Total customer revenue" },
    { label: "Customer Status", code: '=IF(G2>=1000,"HIGH VALUE","NORMAL")', desc: "Customer value status" }
  ]
},

{
  id: 904,
  name: "KITCHEN REPORT",
  icon: "👨‍🍳",
  category: "Restaurant",
  color: "#8e24aa",
  colorRgb: "rgba(142,36,170,0.25)",
  use: "Kitchen orders, preparation time और food quality tracking करनेकेलिए",
  tags: ["KITCHEN","FOOD","ORDER","QUALITY","RESTAURANT"],
  formulas: [
    { label: "Total Orders", code: '=COUNTA(B2:B100)', desc: "Kitchen total orders" },
    { label: "Completed Orders", code: '=COUNTIF(E2:E100,"READY")', desc: "Ready orders count" },
    { label: "Pending Orders", code: '=COUNTIF(E2:E100,"PENDING")', desc: "Pending orders count" },
    { label: "Cancelled Orders", code: '=COUNTIF(E2:E100,"CANCELLED")', desc: "Cancelled orders count" },
    { label: "Veg Orders", code: '=COUNTIF(F2:F100,"VEG")', desc: "Veg orders count" },
    { label: "Non-Veg Orders", code: '=COUNTIF(F2:F100,"NON-VEG")', desc: "Non-veg orders count" },
    { label: "Avg Preparation Time", code: '=AVERAGE(G2:G100)', desc: "Average cooking time" },
    { label: "Fast Orders", code: '=COUNTIF(G2:G100,"<20")', desc: "Fast prepared orders" },
    { label: "Slow Orders", code: '=COUNTIF(G2:G100,">40")', desc: "Slow prepared orders" },
    { label: "Kitchen Status", code: '=IF(E2="READY","DONE","WORKING")', desc: "Kitchen order status" }
  ]
},

{
  id: 905,
  name: "DAILY COLLECTION REPORT",
  icon: "💰",
  category: "Restaurant",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "Daily cash collection, total income और restaurant daily performance tracking",
  tags: ["DAILY","COLLECTION","CASH","INCOME","RESTAURANT"],
  formulas: [
    { label: "Total Collection", code: '=SUM(E2:E100)', desc: "Daily total collection" },
    { label: "Cash Collection", code: '=SUMIF(F2:F100,"CASH",E2:E100)', desc: "Cash income total" },
    { label: "Online Collection", code: '=SUMIF(F2:F100,"ONLINE",E2:E100)', desc: "Online payment income" },
    { label: "Highest Collection", code: '=MAX(E2:E100)', desc: "Highest daily income" },
    { label: "Lowest Collection", code: '=MIN(E2:E100)', desc: "Lowest daily income" },
    { label: "Average Collection", code: '=AVERAGE(E2:E100)', desc: "Average daily income" },
    { label: "Total Bills", code: '=COUNTA(B2:B100)', desc: "Total bills count" },
    { label: "Pending Payments", code: '=COUNTIF(G2:G100,"PENDING")', desc: "Pending payments count" },
    { label: "Paid Bills", code: '=COUNTIF(G2:G100,"PAID")', desc: "Paid bills count" },
    { label: "Collection Status", code: '=IF(E2>=10000,"GOOD","LOW")', desc: "Daily performance status" }
  ]
},
    {
  id: 906,
  name: "WAITER REPORT",
  icon: "🧑‍🍽️",
  category: "Restaurant",
  color: "#1e88e5",
  colorRgb: "rgba(30,136,229,0.25)",
  use: "Waiter performance, orders handling और service tracking करनेकेलिए",
  tags: ["WAITER","SERVICE","RESTAURANT","ORDER","STAFF"],
  formulas: [
    { label: "Total Orders Handled", code: '=SUM(E2:E100)', desc: "Waiter द्वारा handled orders" },
    { label: "Best Waiter Orders", code: '=MAX(E2:E100)', desc: "Highest orders by waiter" },
    { label: "Average Orders", code: '=AVERAGE(E2:E100)', desc: "Average orders per waiter" },
    { label: "Total Waiters", code: '=COUNTA(B2:B100)', desc: "Total waiters count" },
    { label: "Completed Orders", code: '=COUNTIF(F2:F100,"DONE")', desc: "Completed service orders" },
    { label: "Pending Orders", code: '=COUNTIF(F2:F100,"PENDING")', desc: "Pending service orders" },
    { label: "Fast Service", code: '=COUNTIF(G2:G100,"FAST")', desc: "Fast service count" },
    { label: "Slow Service", code: '=COUNTIF(G2:G100,"SLOW")', desc: "Slow service count" },
    { label: "Tips Earned", code: '=SUM(H2:H100)', desc: "Total tips earned" },
    { label: "Performance Status", code: '=IF(E2>=50,"EXCELLENT","NEED IMPROVEMENT")', desc: "Waiter performance status" }
  ]
},

{
  id: 907,
  name: "ONLINE FOOD ORDER REPORT",
  icon: "📲",
  category: "Restaurant",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Online food orders, delivery apps और digital sales tracking करनेकेलिए",
  tags: ["ONLINE","FOOD","ORDER","DELIVERY","APP"],
  formulas: [
    { label: "Total Online Orders", code: '=COUNTA(B2:B100)', desc: "Online orders count" },
    { label: "Completed Orders", code: '=COUNTIF(E2:E100,"DELIVERED")', desc: "Delivered orders" },
    { label: "Pending Orders", code: '=COUNTIF(E2:E100,"PENDING")', desc: "Pending online orders" },
    { label: "Cancelled Orders", code: '=COUNTIF(E2:E100,"CANCELLED")', desc: "Cancelled orders" },
    { label: "Total Revenue", code: '=SUM(F2:F100)', desc: "Online food revenue" },
    { label: "Highest Order", code: '=MAX(F2:F100)', desc: "Highest online order" },
    { label: "Average Order Value", code: '=AVERAGE(F2:F100)', desc: "Average order value" },
    { label: "Swiggy Orders", code: '=COUNTIF(G2:G100,"SWIGGY")', desc: "Swiggy orders count" },
    { label: "Zomato Orders", code: '=COUNTIF(G2:G100,"ZOMATO")', desc: "Zomato orders count" },
    { label: "Order Status", code: '=IF(E2="DELIVERED","SUCCESS","CHECK")', desc: "Order status check" }
  ]
},

{
  id: 908,
  name: "MENU REPORT",
  icon: "📋",
  category: "Restaurant",
  color: "#fb8c00",
  colorRgb: "rgba(251,140,0,0.25)",
  use: "Food menu items, pricing और availability tracking करनेकेलिए",
  tags: ["MENU","FOOD","ITEM","PRICE","RESTAURANT"],
  formulas: [
    { label: "Total Menu Items", code: '=COUNTA(B2:B100)', desc: "Menu items count" },
    { label: "Veg Items", code: '=COUNTIF(E2:E100,"VEG")', desc: "Veg menu items" },
    { label: "Non-Veg Items", code: '=COUNTIF(E2:E100,"NON-VEG")', desc: "Non-veg menu items" },
    { label: "Drinks Items", code: '=COUNTIF(E2:E100,"DRINKS")', desc: "Drinks items count" },
    { label: "Highest Price", code: '=MAX(F2:F100)', desc: "Highest menu price" },
    { label: "Lowest Price", code: '=MIN(F2:F100)', desc: "Lowest menu price" },
    { label: "Average Price", code: '=AVERAGE(F2:F100)', desc: "Average menu price" },
    { label: "Available Items", code: '=COUNTIF(G2:G100,"AVAILABLE")', desc: "Available items count" },
    { label: "Unavailable Items", code: '=COUNTIF(G2:G100,"UNAVAILABLE")', desc: "Unavailable items count" },
    { label: "Menu Status", code: '=IF(F2>=500,"PREMIUM ITEM","NORMAL ITEM")', desc: "Item category status" }
  ]
},

{
  id: 909,
  name: "RESTAURANT SUMMARY REPORT",
  icon: "📊",
  category: "Restaurant",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Complete restaurant business overview, profit और performance tracking",
  tags: ["SUMMARY","RESTAURANT","PROFIT","BUSINESS","REPORT"],
  formulas: [
    { label: "Total Revenue", code: '=SUM(E2:E100)', desc: "Total restaurant income" },
    { label: "Total Orders", code: '=SUM(F2:F100)', desc: "Total orders count" },
    { label: "Total Profit", code: '=SUM(G2:G100)', desc: "Restaurant profit" },
    { label: "Total Customers", code: '=COUNTA(B2:B100)', desc: "Customer count" },
    { label: "Highest Revenue", code: '=MAX(E2:E100)', desc: "Highest earning day" },
    { label: "Lowest Revenue", code: '=MIN(E2:E100)', desc: "Lowest earning day" },
    { label: "Average Revenue", code: '=AVERAGE(E2:E100)', desc: "Average daily revenue" },
    { label: "Best Selling Item", code: '=INDEX(C2:C100,MATCH(MAX(E2:E100),E2:E100,0))', desc: "Top selling item" },
    { label: "Total Bills", code: '=COUNTA(E2:E100)', desc: "Total bills generated" },
    { label: "Business Status", code: '=IF(G2>0,"PROFIT","LOSS")', desc: "Business status check" }
  ]
},
    {
  id: 910,
  name: "FOOD QUALITY REPORT",
  icon: "⭐",
  category: "Restaurant",
  color: "#2e7d32",
  colorRgb: "rgba(46,125,50,0.25)",
  use: "Food quality rating, customer feedback और taste analysis के लिए",
  tags: ["QUALITY","FOOD","RATING","FEEDBACK","RESTAURANT"],
  formulas: [
    { label: "Total Feedbacks", code: '=COUNTA(B2:B100)', desc: "Total customer feedback entries" },
    { label: "Average Rating", code: '=AVERAGE(E2:E100)', desc: "Overall food rating" },
    { label: "Highest Rating", code: '=MAX(E2:E100)', desc: "Best rating received" },
    { label: "Lowest Rating", code: '=MIN(E2:E100)', desc: "Worst rating received" },
    { label: "5 Star Reviews", code: '=COUNTIF(E2:E100,5)', desc: "Excellent ratings count" },
    { label: "Below 3 Rating", code: '=COUNTIF(E2:E100,"<3")', desc: "Poor quality feedback" },
    { label: "Positive Feedback", code: '=COUNTIF(F2:F100,"GOOD")', desc: "Positive reviews count" },
    { label: "Negative Feedback", code: '=COUNTIF(F2:F100,"BAD")', desc: "Negative reviews count" },
    { label: "Food Improvement Needed", code: '=IF(E2<3,"IMPROVE","OK")', desc: "Quality check status" },
    { label: "Quality Score", code: '=AVERAGE(E2:E100)*20', desc: "Overall quality score out of 100" }
  ]
},

{
  id: 911,
  name: "DELIVERY REPORT",
  icon: "🚚",
  category: "Restaurant",
  color: "#ef6c00",
  colorRgb: "rgba(239,108,0,0.25)",
  use: "Food delivery timing, status और delivery boy performance tracking",
  tags: ["DELIVERY","ORDER","TIME","RESTAURANT","TRACKING"],
  formulas: [
    { label: "Total Deliveries", code: '=COUNTA(B2:B100)', desc: "Total delivery orders" },
    { label: "Delivered Orders", code: '=COUNTIF(E2:E100,"DELIVERED")', desc: "Successful deliveries" },
    { label: "Pending Deliveries", code: '=COUNTIF(E2:E100,"PENDING")', desc: "Pending delivery orders" },
    { label: "Cancelled Deliveries", code: '=COUNTIF(E2:E100,"CANCELLED")', desc: "Cancelled orders" },
    { label: "Fast Deliveries", code: '=COUNTIF(F2:F100,"<30")', desc: "Delivered under 30 min" },
    { label: "Slow Deliveries", code: '=COUNTIF(F2:F100,">60")', desc: "Late deliveries" },
    { label: "Average Delivery Time", code: '=AVERAGE(F2:F100)', desc: "Avg delivery time" },
    { label: "Delivery Revenue", code: '=SUM(G2:G100)', desc: "Total delivery income" },
    { label: "Delivery Success Rate", code: '=COUNTIF(E2:E100,"DELIVERED")/COUNTA(B2:B100)*100', desc: "Success percentage" },
    { label: "Delivery Status", code: '=IF(F2<=30,"FAST","SLOW")', desc: "Delivery performance" }
  ]
},

{
  id: 912,
  name: "RESTAURANT STAFF REPORT",
  icon: "👨‍💼",
  category: "Restaurant",
  color: "#5e35b1",
  colorRgb: "rgba(94,53,177,0.25)",
  use: "Restaurant staff performance, salary और attendance tracking",
  tags: ["STAFF","RESTAURANT","SALARY","ATTENDANCE","PERFORMANCE"],
  formulas: [
    { label: "Total Staff", code: '=COUNTA(B2:B100)', desc: "Total employees" },
    { label: "Present Staff", code: '=COUNTIF(E2:E100,"PRESENT")', desc: "Present employees" },
    { label: "Absent Staff", code: '=COUNTIF(E2:E100,"ABSENT")', desc: "Absent employees" },
    { label: "Total Salary", code: '=SUM(F2:F100)', desc: "Total salary payout" },
    { label: "Highest Salary", code: '=MAX(F2:F100)', desc: "Highest paid staff" },
    { label: "Lowest Salary", code: '=MIN(F2:F100)', desc: "Lowest paid staff" },
    { label: "Average Salary", code: '=AVERAGE(F2:F100)', desc: "Average salary" },
    { label: "Performance Score", code: '=AVERAGE(G2:G100)', desc: "Staff performance average" },
    { label: "Active Staff", code: '=COUNTIF(E2:E100,"ACTIVE")', desc: "Active employees" },
    { label: "Staff Status", code: '=IF(G2>=80,"GOOD","NEED IMPROVEMENT")', desc: "Performance status" }
  ]
},

{
  id: 913,
  name: "RESTAURANT FINAL SUMMARY REPORT",
  icon: "📊",
  category: "Restaurant",
  color: "#d81b60",
  colorRgb: "rgba(216,27,96,0.25)",
  use: "Complete restaurant business summary, profit और full analytics",
  tags: ["SUMMARY","FINAL","RESTAURANT","PROFIT","ANALYTICS"],
  formulas: [
    { label: "Total Revenue", code: '=SUM(E2:E100)', desc: "Restaurant total income" },
    { label: "Total Orders", code: '=COUNTA(B2:B100)', desc: "All orders count" },
    { label: "Total Profit", code: '=SUM(F2:F100)', desc: "Total profit" },
    { label: "Total Customers", code: '=COUNTA(C2:C100)', desc: "Customer count" },
    { label: "Highest Sale", code: '=MAX(E2:E100)', desc: "Highest transaction" },
    { label: "Lowest Sale", code: '=MIN(E2:E100)', desc: "Lowest transaction" },
    { label: "Average Sale", code: '=AVERAGE(E2:E100)', desc: "Average revenue" },
    { label: "Best Item", code: '=INDEX(C2:C100,MATCH(MAX(E2:E100),E2:E100,0))', desc: "Top selling item" },
    { label: "Total Bills", code: '=COUNTA(E2:E100)', desc: "Total bills generated" },
    { label: "Business Status", code: '=IF(F2>0,"PROFIT","LOSS")', desc: "Final business status" }
  ]
},
    {
  id: 914,
  name: "RESTAURANT BILL REPORT",
  icon: "🧾",
  category: "Restaurant",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Restaurant billing, invoice tracking और payment analysis के लिए",
  tags: ["BILL","INVOICE","PAYMENT","RESTAURANT","ACCOUNT"],
  formulas: [
    { label: "Total Bills", code: '=COUNTA(B2:B100)', desc: "Total generated bills" },
    { label: "Total Amount", code: '=SUM(E2:E100)', desc: "Total bill amount" },
    { label: "Paid Bills", code: '=COUNTIF(F2:F100,"PAID")', desc: "Paid bills count" },
    { label: "Pending Bills", code: '=COUNTIF(F2:F100,"PENDING")', desc: "Pending bills count" },
    { label: "Cancelled Bills", code: '=COUNTIF(F2:F100,"CANCELLED")', desc: "Cancelled bills" },
    { label: "Highest Bill", code: '=MAX(E2:E100)', desc: "Highest bill value" },
    { label: "Lowest Bill", code: '=MIN(E2:E100)', desc: "Lowest bill value" },
    { label: "Average Bill", code: '=AVERAGE(E2:E100)', desc: "Average bill amount" },
    { label: "Cash Bills", code: '=COUNTIF(G2:G100,"CASH")', desc: "Cash payments" },
    { label: "Online Bills", code: '=COUNTIF(G2:G100,"ONLINE")', desc: "Online payments" }
  ]
},

{
  id: 915,
  name: "RESTAURANT MENU PRICE ANALYSIS",
  icon: "💲",
  category: "Restaurant",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "Menu pricing, profit margin और item performance analysis",
  tags: ["MENU","PRICE","PROFIT","FOOD","ANALYSIS"],
  formulas: [
    { label: "Total Items", code: '=COUNTA(B2:B100)', desc: "Total menu items" },
    { label: "Veg Items", code: '=COUNTIF(C2:C100,"VEG")', desc: "Veg items count" },
    { label: "Non-Veg Items", code: '=COUNTIF(C2:C100,"NON-VEG")', desc: "Non-veg items count" },
    { label: "Highest Price", code: '=MAX(D2:D100)', desc: "Highest menu price" },
    { label: "Lowest Price", code: '=MIN(D2:D100)', desc: "Lowest menu price" },
    { label: "Average Price", code: '=AVERAGE(D2:D100)', desc: "Average item price" },
    { label: "High Profit Items", code: '=COUNTIF(E2:E100,">50")', desc: "High profit items" },
    { label: "Low Profit Items", code: '=COUNTIF(E2:E100,"<20")', desc: "Low profit items" },
    { label: "Total Revenue Potential", code: '=SUM(D2:D100)', desc: "Max possible revenue" },
    { label: "Price Status", code: '=IF(D2>500,"PREMIUM","NORMAL")', desc: "Item category" }
  ]
},

{
  id: 916,
  name: "RESTAURANT DAILY SUMMARY DASHBOARD",
  icon: "📊",
  category: "Restaurant",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Complete daily restaurant performance dashboard और analytics",
  tags: ["DASHBOARD","DAILY","SUMMARY","RESTAURANT","ANALYTICS"],
  formulas: [
    { label: "Total Revenue", code: '=SUM(E2:E100)', desc: "Daily total revenue" },
    { label: "Total Orders", code: '=COUNTA(B2:B100)', desc: "Total orders count" },
    { label: "Total Profit", code: '=SUM(F2:F100)', desc: "Total profit" },
    { label: "Total Customers", code: '=COUNTA(C2:C100)', desc: "Customer count" },
    { label: "Highest Order Value", code: '=MAX(E2:E100)', desc: "Top order value" },
    { label: "Lowest Order Value", code: '=MIN(E2:E100)', desc: "Lowest order value" },
    { label: "Average Order Value", code: '=AVERAGE(E2:E100)', desc: "Average order" },
    { label: "Completed Orders", code: '=COUNTIF(D2:D100,"COMPLETED")', desc: "Completed orders" },
    { label: "Pending Orders", code: '=COUNTIF(D2:D100,"PENDING")', desc: "Pending orders" },
    { label: "Business Status", code: '=IF(F2>0,"PROFIT","LOSS")', desc: "Overall business status" }
  ]
},
    {
  id: 917,
  name: "RESTAURANT INVENTORY REPORT",
  icon: "📦",
  category: "Restaurant",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Kitchen stock, raw material और food inventory tracking के लिए",
  tags: ["INVENTORY","STOCK","FOOD","KITCHEN","MATERIAL"],
  formulas: [
    { label: "Total Items", code: '=COUNTA(B2:B100)', desc: "Total inventory items" },
    { label: "Available Stock", code: '=SUM(C2:C100)', desc: "Total available stock" },
    { label: "Used Stock", code: '=SUM(D2:D100)', desc: "Total used stock" },
    { label: "Low Stock Items", code: '=COUNTIF(C2:C100,"<10")', desc: "Low stock alert items" },
    { label: "Out of Stock", code: '=COUNTIF(C2:C100,0)', desc: "Stock finished items" },
    { label: "Highest Stock Item", code: '=MAX(C2:C100)', desc: "Maximum stock item" },
    { label: "Average Stock", code: '=AVERAGE(C2:C100)', desc: "Average stock level" },
    { label: "Wastage", code: '=SUM(E2:E100)', desc: "Food wastage amount" },
    { label: "Stock Value", code: '=SUM(F2:F100)', desc: "Total stock value" },
    { label: "Stock Status", code: '=IF(C2<10,"REORDER","OK")', desc: "Stock alert status" }
  ]
},

{
  id: 918,
  name: "RESTAURANT PROFIT REPORT",
  icon: "💹",
  category: "Restaurant",
  color: "#2e7d32",
  colorRgb: "rgba(46,125,50,0.25)",
  use: "Restaurant profit, loss और financial performance tracking के लिए",
  tags: ["PROFIT","LOSS","RESTAURANT","FINANCE","REPORT"],
  formulas: [
    { label: "Total Revenue", code: '=SUM(B2:B100)', desc: "Total income" },
    { label: "Total Expense", code: '=SUM(C2:C100)', desc: "Total expenses" },
    { label: "Gross Profit", code: '=SUM(B2:B100)-SUM(C2:C100)', desc: "Profit calculation" },
    { label: "Highest Profit Day", code: '=MAX(D2:D100)', desc: "Best profit day" },
    { label: "Lowest Profit Day", code: '=MIN(D2:D100)', desc: "Worst profit day" },
    { label: "Average Profit", code: '=AVERAGE(D2:D100)', desc: "Average profit" },
    { label: "Profit Margin %", code: '=(SUM(D2:D100)/SUM(B2:B100))*100', desc: "Profit percentage" },
    { label: "Loss Days", code: '=COUNTIF(D2:D100,"<0")', desc: "Loss days count" },
    { label: "Profit Days", code: '=COUNTIF(D2:D100,">0")', desc: "Profit days count" },
    { label: "Business Status", code: '=IF(D2>0,"PROFIT","LOSS")', desc: "Overall status" }
  ]
},

{
  id: 919,
  name: "RESTAURANT FINAL MASTER REPORT",
  icon: "🏆",
  category: "Restaurant",
  color: "#d81b60",
  colorRgb: "rgba(216,27,96,0.25)",
  use: "Complete restaurant business master dashboard और final analytics report",
  tags: ["MASTER","FINAL","RESTAURANT","DASHBOARD","ANALYTICS"],
  formulas: [
    { label: "Total Sales", code: '=SUM(B2:B100)', desc: "Total sales revenue" },
    { label: "Total Orders", code: '=COUNTA(B2:B100)', desc: "Total orders" },
    { label: "Total Customers", code: '=COUNTA(C2:C100)', desc: "Total customers" },
    { label: "Total Profit", code: '=SUM(D2:D100)', desc: "Final profit" },
    { label: "Highest Sale", code: '=MAX(B2:B100)', desc: "Best sale value" },
    { label: "Lowest Sale", code: '=MIN(B2:B100)', desc: "Lowest sale value" },
    { label: "Average Sale", code: '=AVERAGE(B2:B100)', desc: "Average sales" },
    { label: "Best Item", code: '=INDEX(E2:E100,MATCH(MAX(B2:B100),B2:B100,0))', desc: "Top selling item" },
    { label: "Total Bills", code: '=COUNTA(B2:B100)', desc: "Bills generated" },
    { label: "Final Status", code: '=IF(D2>0,"SUCCESS PROFIT","LOSS")', desc: "Final business status" }
  ]
},
  {
  id: 920,
  name: "RESTAURANT EMPLOYEE SHIFT REPORT",
  icon: "🕒",
  category: "Restaurant",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Staff shift timing, duty hours और attendance tracking के लिए",
  tags: ["SHIFT","EMPLOYEE","TIME","ATTENDANCE","RESTAURANT"],
  formulas: [
    { label: "Total Employees", code: '=COUNTA(B2:B100)', desc: "Total staff count" },
    { label: "Present Employees", code: '=COUNTIF(C2:C100,"PRESENT")', desc: "Present staff" },
    { label: "Absent Employees", code: '=COUNTIF(C2:C100,"ABSENT")', desc: "Absent staff" },
    { label: "Morning Shift", code: '=COUNTIF(D2:D100,"MORNING")', desc: "Morning shift staff" },
    { label: "Evening Shift", code: '=COUNTIF(D2:D100,"EVENING")', desc: "Evening shift staff" },
    { label: "Night Shift", code: '=COUNTIF(D2:D100,"NIGHT")', desc: "Night shift staff" },
    { label: "Total Working Hours", code: '=SUM(E2:E100)', desc: "Total duty hours" },
    { label: "Average Hours", code: '=AVERAGE(E2:E100)', desc: "Average working hours" },
    { label: "Overtime Staff", code: '=COUNTIF(E2:E100,">10")', desc: "Overtime employees" },
    { label: "Shift Status", code: '=IF(E2>8,"OVERWORKED","NORMAL")', desc: "Work status" }
  ]
},

{
  id: 921,
  name: "RESTAURANT ORDER STATUS REPORT",
  icon: "📋",
  category: "Restaurant",
  color: "#fb8c00",
  colorRgb: "rgba(251,140,0,0.25)",
  use: "Order tracking, preparation status और delivery monitoring के लिए",
  tags: ["ORDER","STATUS","TRACKING","RESTAURANT","DELIVERY"],
  formulas: [
    { label: "Total Orders", code: '=COUNTA(B2:B100)', desc: "All orders" },
    { label: "Completed Orders", code: '=COUNTIF(C2:C100,"DONE")', desc: "Completed orders" },
    { label: "Pending Orders", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Pending orders" },
    { label: "Preparing Orders", code: '=COUNTIF(C2:C100,"PREPARING")', desc: "Cooking orders" },
    { label: "Delivered Orders", code: '=COUNTIF(C2:C100,"DELIVERED")', desc: "Delivered orders" },
    { label: "Cancelled Orders", code: '=COUNTIF(C2:C100,"CANCELLED")', desc: "Cancelled orders" },
    { label: "Average Preparation Time", code: '=AVERAGE(D2:D100)', desc: "Cooking time average" },
    { label: "Fast Orders", code: '=COUNTIF(D2:D100,"<20")', desc: "Fast prepared orders" },
    { label: "Slow Orders", code: '=COUNTIF(D2:D100,">40")', desc: "Slow orders" },
    { label: "Order Status", code: '=IF(C2="DONE","SUCCESS","CHECK")', desc: "Order status check" }
  ]
},

{
  id: 922,
  name: "RESTAURANT CUSTOMER LOYALTY REPORT",
  icon: "🎁",
  category: "Restaurant",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Regular customers, loyalty points और discount tracking के लिए",
  tags: ["CUSTOMER","LOYALTY","POINTS","DISCOUNT","RESTAURANT"],
  formulas: [
    { label: "Total Customers", code: '=COUNTA(B2:B100)', desc: "All customers" },
    { label: "New Customers", code: '=COUNTIF(C2:C100,"NEW")', desc: "New customers" },
    { label: "Regular Customers", code: '=COUNTIF(C2:C100,"REGULAR")', desc: "Repeat customers" },
    { label: "VIP Customers", code: '=COUNTIF(C2:C100,"VIP")', desc: "Premium customers" },
    { label: "Total Visits", code: '=SUM(D2:D100)', desc: "Customer visits" },
    { label: "Total Points", code: '=SUM(E2:E100)', desc: "Loyalty points" },
    { label: "Redeemed Points", code: '=SUM(F2:F100)', desc: "Used points" },
    { label: "Available Points", code: '=SUM(E2:E100)-SUM(F2:F100)', desc: "Remaining points" },
    { label: "High Value Customer", code: '=COUNTIF(E2:E100,">500")', desc: "Premium customers" },
    { label: "Customer Status", code: '=IF(E2>300,"LOYAL","NORMAL")', desc: "Loyalty status" }
  ]
},
    {
  id: 923,
  name: "RESTAURANT RESERVATION ANALYSIS REPORT",
  icon: "📅",
  category: "Restaurant",
  color: "#6a1b9a",
  colorRgb: "rgba(106,27,154,0.25)",
  use: "Table booking trends, peak time analysis और reservation management के लिए",
  tags: ["RESERVATION","BOOKING","TABLE","ANALYSIS","RESTAURANT"],
  formulas: [
    { label: "Total Reservations", code: '=COUNTA(B2:B100)', desc: "All bookings" },
    { label: "Confirmed Reservations", code: '=COUNTIF(C2:C100,"CONFIRMED")', desc: "Confirmed tables" },
    { label: "Cancelled Reservations", code: '=COUNTIF(C2:C100,"CANCELLED")', desc: "Cancelled bookings" },
    { label: "Pending Reservations", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Pending bookings" },
    { label: "VIP Reservations", code: '=COUNTIF(D2:D100,"VIP")', desc: "VIP tables booked" },
    { label: "Regular Reservations", code: '=COUNTIF(D2:D100,"REGULAR")', desc: "Normal bookings" },
    { label: "Peak Hour Bookings", code: '=COUNTIF(E2:E100,">20")', desc: "Busy hour bookings" },
    { label: "Average Guests", code: '=AVERAGE(F2:F100)', desc: "Average guests per table" },
    { label: "Total Revenue", code: '=SUM(G2:G100)', desc: "Reservation income" },
    { label: "Booking Status", code: '=IF(C2="CONFIRMED","OK","CHECK")', desc: "Reservation status" }
  ]
},

{
  id: 924,
  name: "RESTAURANT EXPENSE REPORT",
  icon: "💸",
  category: "Restaurant",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Restaurant daily expenses, cost control और budgeting के लिए",
  tags: ["EXPENSE","COST","BUDGET","RESTAURANT","FINANCE"],
  formulas: [
    { label: "Total Expense", code: '=SUM(B2:B100)', desc: "All expenses" },
    { label: "Food Cost", code: '=SUMIF(C2:C100,"FOOD",B2:B100)', desc: "Food raw material cost" },
    { label: "Staff Salary", code: '=SUMIF(C2:C100,"SALARY",B2:B100)', desc: "Staff expenses" },
    { label: "Electricity Bill", code: '=SUMIF(C2:C100,"ELECTRICITY",B2:B100)', desc: "Power cost" },
    { label: "Water Bill", code: '=SUMIF(C2:C100,"WATER",B2:B100)', desc: "Water expenses" },
    { label: "Maintenance Cost", code: '=SUMIF(C2:C100,"MAINTENANCE",B2:B100)', desc: "Repair cost" },
    { label: "Highest Expense", code: '=MAX(B2:B100)', desc: "Highest cost" },
    { label: "Lowest Expense", code: '=MIN(B2:B100)', desc: "Lowest cost" },
    { label: "Average Expense", code: '=AVERAGE(B2:B100)', desc: "Average spending" },
    { label: "Expense Status", code: '=IF(SUM(B2:B100)>50000,"HIGH COST","NORMAL")', desc: "Cost level check" }
  ]
},

{
  id: 925,
  name: "RESTAURANT FINAL ANALYTICS DASHBOARD",
  icon: "📊",
  category: "Restaurant",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Complete restaurant analytics, profit-loss और performance dashboard",
  tags: ["DASHBOARD","ANALYTICS","FINAL","RESTAURANT","REPORT"],
  formulas: [
    { label: "Total Revenue", code: '=SUM(B2:B100)', desc: "Total income" },
    { label: "Total Expense", code: '=SUM(C2:C100)', desc: "Total cost" },
    { label: "Net Profit", code: '=SUM(B2:B100)-SUM(C2:C100)', desc: "Final profit" },
    { label: "Total Orders", code: '=COUNTA(D2:D100)', desc: "All orders" },
    { label: "Completed Orders", code: '=COUNTIF(E2:E100,"DONE")', desc: "Successful orders" },
    { label: "Pending Orders", code: '=COUNTIF(E2:E100,"PENDING")', desc: "Waiting orders" },
    { label: "Highest Revenue Day", code: '=MAX(B2:B100)', desc: "Best day income" },
    { label: "Lowest Revenue Day", code: '=MIN(B2:B100)', desc: "Worst day income" },
    { label: "Average Revenue", code: '=AVERAGE(B2:B100)', desc: "Daily average" },
    { label: "Business Status", code: '=IF((B2-B3)>0,"PROFIT","LOSS")', desc: "Final status" }
  ]
},
    {
  id: 926,
  name: "RESTAURANT KITCHEN STOCK REPORT",
  icon: "🥬",
  category: "Restaurant",
  color: "#43a047",
  colorRgb: "rgba(67,160,71,0.25)",
  use: "Kitchen raw material stock, ingredients usage और wastage tracking",
  tags: ["KITCHEN","STOCK","FOOD","INVENTORY","RESTAURANT"],
  formulas: [
    { label: "Total Items", code: '=COUNTA(B2:B100)', desc: "Total kitchen items" },
    { label: "Available Stock", code: '=SUM(C2:C100)', desc: "Current stock" },
    { label: "Used Stock", code: '=SUM(D2:D100)', desc: "Used ingredients" },
    { label: "Wastage", code: '=SUM(E2:E100)', desc: "Food wastage" },
    { label: "Low Stock Items", code: '=COUNTIF(C2:C100,"<10")', desc: "Low stock alert" },
    { label: "Out of Stock", code: '=COUNTIF(C2:C100,0)', desc: "Finished items" },
    { label: "Highest Stock", code: '=MAX(C2:C100)', desc: "Max stock item" },
    { label: "Average Stock", code: '=AVERAGE(C2:C100)', desc: "Avg stock level" },
    { label: "Stock Value", code: '=SUM(F2:F100)', desc: "Total inventory value" },
    { label: "Stock Status", code: '=IF(C2<10,"REORDER","OK")', desc: "Stock alert status" }
  ]
},

{
  id: 927,
  name: "RESTAURANT ORDER PERFORMANCE REPORT",
  icon: "📦",
  category: "Restaurant",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Order efficiency, delivery speed और performance analysis",
  tags: ["ORDER","PERFORMANCE","DELIVERY","RESTAURANT","SPEED"],
  formulas: [
    { label: "Total Orders", code: '=COUNTA(B2:B100)', desc: "All orders" },
    { label: "Completed Orders", code: '=COUNTIF(C2:C100,"DONE")', desc: "Completed orders" },
    { label: "Pending Orders", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Pending orders" },
    { label: "Cancelled Orders", code: '=COUNTIF(C2:C100,"CANCELLED")', desc: "Cancelled orders" },
    { label: "Fast Orders", code: '=COUNTIF(D2:D100,"<20")', desc: "Fast service orders" },
    { label: "Slow Orders", code: '=COUNTIF(D2:D100,">40")', desc: "Delayed orders" },
    { label: "Average Time", code: '=AVERAGE(D2:D100)', desc: "Avg preparation time" },
    { label: "Total Revenue", code: '=SUM(E2:E100)', desc: "Order revenue" },
    { label: "Success Rate", code: '=COUNTIF(C2:C100,"DONE")/COUNTA(B2:B100)*100', desc: "Success percentage" },
    { label: "Performance Status", code: '=IF(D2<=20,"FAST","SLOW")', desc: "Order speed status" }
  ]
},

{
  id: 928,
  name: "RESTAURANT FINAL BUSINESS REPORT",
  icon: "🏆",
  category: "Restaurant",
  color: "#d81b60",
  colorRgb: "rgba(216,27,96,0.25)",
  use: "Complete restaurant business overview, profit-loss और final performance summary",
  tags: ["FINAL","BUSINESS","PROFIT","RESTAURANT","SUMMARY"],
  formulas: [
    { label: "Total Revenue", code: '=SUM(B2:B100)', desc: "Total income" },
    { label: "Total Expense", code: '=SUM(C2:C100)', desc: "Total expenses" },
    { label: "Net Profit", code: '=SUM(B2:B100)-SUM(C2:C100)', desc: "Final profit" },
    { label: "Total Orders", code: '=COUNTA(D2:D100)', desc: "All orders" },
    { label: "Total Customers", code: '=COUNTA(E2:E100)', desc: "Customer count" },
    { label: "Highest Sale", code: '=MAX(B2:B100)', desc: "Best revenue" },
    { label: "Lowest Sale", code: '=MIN(B2:B100)', desc: "Lowest revenue" },
    { label: "Average Sale", code: '=AVERAGE(B2:B100)', desc: "Average income" },
    { label: "Best Item", code: '=INDEX(F2:F100,MATCH(MAX(B2:B100),B2:B100,0))', desc: "Top selling item" },
    { label: "Business Status", code: '=IF(C2<B2,"PROFIT","LOSS")', desc: "Final status check" }
  ]
},
    {
  id: 929,
  name: "RESTAURANT CUSTOMER FEEDBACK REPORT",
  icon: "⭐",
  category: "Restaurant",
  color: "#ff9800",
  colorRgb: "rgba(255,152,0,0.25)",
  use: "Customer review, rating और feedback analysis के लिए",
  tags: ["FEEDBACK","RATING","REVIEW","CUSTOMER","RESTAURANT"],
  formulas: [
    { label: "Total Feedback", code: '=COUNTA(B2:B100)', desc: "Total reviews" },
    { label: "5 Star Ratings", code: '=COUNTIF(C2:C100,5)', desc: "Excellent ratings" },
    { label: "4 Star Ratings", code: '=COUNTIF(C2:C100,4)', desc: "Good ratings" },
    { label: "Low Ratings", code: '=COUNTIF(C2:C100,"<=2")', desc: "Bad ratings" },
    { label: "Average Rating", code: '=AVERAGE(C2:C100)', desc: "Overall rating" },
    { label: "Positive Feedback", code: '=COUNTIF(D2:D100,"GOOD")', desc: "Positive reviews" },
    { label: "Negative Feedback", code: '=COUNTIF(D2:D100,"BAD")', desc: "Negative reviews" },
    { label: "Total Complaints", code: '=COUNTIF(D2:D100,"COMPLAINT")', desc: "Customer issues" },
    { label: "Happy Customers %", code: '=COUNTIF(C2:C100,">=4")/COUNTA(B2:B100)*100', desc: "Satisfaction rate" },
    { label: "Feedback Status", code: '=IF(AVERAGE(C2:C100)>=4,"GOOD","NEEDS IMPROVEMENT")', desc: "Overall feedback status" }
  ]
},

{
  id: 930,
  name: "RESTAURANT STAFF PERFORMANCE REPORT",
  icon: "👨‍🍳",
  category: "Restaurant",
  color: "#8e24aa",
  colorRgb: "rgba(142,36,170,0.25)",
  use: "Staff efficiency, service quality और performance evaluation",
  tags: ["STAFF","PERFORMANCE","EMPLOYEE","RESTAURANT","EFFICIENCY"],
  formulas: [
    { label: "Total Staff", code: '=COUNTA(B2:B100)', desc: "All employees" },
    { label: "Present Staff", code: '=COUNTIF(C2:C100,"PRESENT")', desc: "Working staff" },
    { label: "Absent Staff", code: '=COUNTIF(C2:C100,"ABSENT")', desc: "Absent staff" },
    { label: "Average Rating", code: '=AVERAGE(D2:D100)', desc: "Performance rating" },
    { label: "Top Performer", code: '=MAX(D2:D100)', desc: "Best employee score" },
    { label: "Low Performer", code: '=MIN(D2:D100)', desc: "Weak employee score" },
    { label: "Overtime Staff", code: '=COUNTIF(E2:E100,">10")', desc: "Extra working hours" },
    { label: "Efficiency %", code: '=AVERAGE(D2:D100)*20', desc: "Performance percentage" },
    { label: "Good Staff", code: '=COUNTIF(D2:D100,">=4")', desc: "High performers" },
    { label: "Performance Status", code: '=IF(AVERAGE(D2:D100)>=4,"EXCELLENT","AVERAGE")', desc: "Overall staff status" }
  ]
},

{
  id: 931,
  name: "RESTAURANT DAILY SUMMARY MASTER",
  icon: "📊",
  category: "Restaurant",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Daily full restaurant dashboard summary और final analytics report",
  tags: ["SUMMARY","DAILY","MASTER","RESTAURANT","DASHBOARD"],
  formulas: [
    { label: "Total Sales", code: '=SUM(B2:B100)', desc: "Total revenue" },
    { label: "Total Orders", code: '=COUNTA(C2:C100)', desc: "Orders count" },
    { label: "Total Customers", code: '=COUNTA(D2:D100)', desc: "Customer count" },
    { label: "Total Profit", code: '=SUM(E2:E100)', desc: "Profit amount" },
    { label: "Total Expense", code: '=SUM(F2:F100)', desc: "Expense amount" },
    { label: "Net Income", code: '=SUM(B2:B100)-SUM(F2:F100)', desc: "Final income" },
    { label: "Highest Sale", code: '=MAX(B2:B100)', desc: "Best sale" },
    { label: "Lowest Sale", code: '=MIN(B2:B100)', desc: "Lowest sale" },
    { label: "Average Sale", code: '=AVERAGE(B2:B100)', desc: "Daily average" },
    { label: "Business Status", code: '=IF(E2>F2,"PROFIT","LOSS")', desc: "Final result" }
  ]
},
    // RESTAURANT REPORTS 👆
    // CONSTRUCTION REPORTS 👇
    {
  id: 1001,
  name: "CONSTRUCTION MATERIAL REPORT",
  icon: "🧱",
  category: "Construction",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Site material stock, usage और availability tracking के लिए",
  tags: ["MATERIAL","STOCK","CONSTRUCTION","SITE","INVENTORY"],
  formulas: [
    { label: "Total Material Items", code: '=COUNTA(B2:B100)', desc: "Total materials list" },
    { label: "Total Stock", code: '=SUM(C2:C100)', desc: "Available material stock" },
    { label: "Used Material", code: '=SUM(D2:D100)', desc: "Material used in site" },
    { label: "Remaining Stock", code: '=C2-D2', desc: "Current remaining stock" },
    { label: "Low Stock Alert", code: '=COUNTIF(C2:C100,"<10")', desc: "Low stock items" },
    { label: "Out of Stock", code: '=COUNTIF(C2:C100,0)', desc: "Finished materials" },
    { label: "Total Material Cost", code: '=SUM(E2:E100)', desc: "Total material expense" },
    { label: "Highest Cost Item", code: '=MAX(E2:E100)', desc: "Most expensive material" },
    { label: "Average Cost", code: '=AVERAGE(E2:E100)', desc: "Average material cost" },
    { label: "Stock Status", code: '=IF(C2<10,"REORDER","OK")', desc: "Material status check" }
  ]
},

{
  id: 1002,
  name: "CONSTRUCTION LABOR REPORT",
  icon: "👷",
  category: "Construction",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Workers attendance, salary और daily labor tracking के लिए",
  tags: ["LABOR","WORKER","ATTENDANCE","SALARY","SITE"],
  formulas: [
    { label: "Total Workers", code: '=COUNTA(B2:B100)', desc: "Total labor count" },
    { label: "Present Workers", code: '=COUNTIF(C2:C100,"PRESENT")', desc: "Working labor" },
    { label: "Absent Workers", code: '=COUNTIF(C2:C100,"ABSENT")', desc: "Absent labor" },
    { label: "Total Wages", code: '=SUM(D2:D100)', desc: "Total labor payment" },
    { label: "Daily Wage Avg", code: '=AVERAGE(D2:D100)', desc: "Average salary per worker" },
    { label: "Overtime Workers", code: '=COUNTIF(E2:E100,">8")', desc: "Extra working hours" },
    { label: "Highest Paid", code: '=MAX(D2:D100)', desc: "Top salary worker" },
    { label: "Lowest Paid", code: '=MIN(D2:D100)', desc: "Lowest salary worker" },
    { label: "Attendance %", code: '=COUNTIF(C2:C100,"PRESENT")/COUNTA(B2:B100)*100', desc: "Attendance rate" },
    { label: "Labor Status", code: '=IF(D2>500,"HIGH COST","NORMAL")', desc: "Cost status" }
  ]
},

{
  id: 1003,
  name: "CONSTRUCTION SITE PROGRESS REPORT",
  icon: "🏗️",
  category: "Construction",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Project progress, completion percentage और site status tracking",
  tags: ["PROGRESS","SITE","PROJECT","CONSTRUCTION","TRACKING"],
  formulas: [
    { label: "Total Tasks", code: '=COUNTA(B2:B100)', desc: "All work tasks" },
    { label: "Completed Tasks", code: '=COUNTIF(C2:C100,"DONE")', desc: "Finished work" },
    { label: "Pending Tasks", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Incomplete work" },
    { label: "In Progress Tasks", code: '=COUNTIF(C2:C100,"IN PROGRESS")', desc: "Ongoing work" },
    { label: "Completion %", code: '=COUNTIF(C2:C100,"DONE")/COUNTA(B2:B100)*100', desc: "Project progress" },
    { label: "Delayed Tasks", code: '=COUNTIF(D2:D100,">DEADLINE")', desc: "Late tasks" },
    { label: "Fast Tasks", code: '=COUNTIF(D2:D100,"<DEADLINE")', desc: "On-time tasks" },
    { label: "Total Budget Used", code: '=SUM(E2:E100)', desc: "Spent amount" },
    { label: "Remaining Budget", code: '=F2-SUM(E2:E100)', desc: "Left budget" },
    { label: "Site Status", code: '=IF(COUNTIF(C2:C100,"DONE")>50,"ON TRACK","DELAYED")', desc: "Overall status" }
  ]
},
    {
  id: 1004,
  name: "CONSTRUCTION CONTRACTOR REPORT",
  icon: "📑",
  category: "Construction",
  color: "#8e24aa",
  colorRgb: "rgba(142,36,170,0.25)",
  use: "Contractor details, payments और work tracking के लिए",
  tags: ["CONTRACTOR","PAYMENT","SITE","AGREEMENT","CONSTRUCTION"],
  formulas: [
    { label: "Total Contractors", code: '=COUNTA(B2:B100)', desc: "All contractors" },
    { label: "Active Contractors", code: '=COUNTIF(C2:C100,"ACTIVE")', desc: "Working contractors" },
    { label: "Inactive Contractors", code: '=COUNTIF(C2:C100,"INACTIVE")', desc: "Not working" },
    { label: "Total Contract Value", code: '=SUM(D2:D100)', desc: "All contracts value" },
    { label: "Paid Amount", code: '=SUM(E2:E100)', desc: "Paid payments" },
    { label: "Pending Payment", code: '=D2-E2', desc: "Remaining amount" },
    { label: "Highest Contract", code: '=MAX(D2:D100)', desc: "Biggest contract" },
    { label: "Lowest Contract", code: '=MIN(D2:D100)', desc: "Smallest contract" },
    { label: "Average Contract", code: '=AVERAGE(D2:D100)', desc: "Average contract value" },
    { label: "Contract Status", code: '=IF(E2<D2,"PENDING","PAID")', desc: "Payment status" }
  ]
},

{
  id: 1005,
  name: "CONSTRUCTION EQUIPMENT REPORT",
  icon: "🛠️",
  category: "Construction",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "Machine usage, maintenance और equipment tracking के लिए",
  tags: ["EQUIPMENT","MACHINE","MAINTENANCE","TOOLS","SITE"],
  formulas: [
    { label: "Total Equipment", code: '=COUNTA(B2:B100)', desc: "All machines" },
    { label: "Working Equipment", code: '=COUNTIF(C2:C100,"WORKING")', desc: "Active machines" },
    { label: "Damaged Equipment", code: '=COUNTIF(C2:C100,"DAMAGED")', desc: "Broken machines" },
    { label: "Under Maintenance", code: '=COUNTIF(C2:C100,"MAINTENANCE")', desc: "Repair items" },
    { label: "Total Cost", code: '=SUM(D2:D100)', desc: "Equipment cost" },
    { label: "Maintenance Cost", code: '=SUM(E2:E100)', desc: "Repair cost" },
    { label: "Highest Cost Machine", code: '=MAX(D2:D100)', desc: "Expensive machine" },
    { label: "Average Cost", code: '=AVERAGE(D2:D100)', desc: "Average equipment cost" },
    { label: "Usage Rate", code: '=COUNTIF(C2:C100,"WORKING")/COUNTA(B2:B100)*100', desc: "Usage percentage" },
    { label: "Equipment Status", code: '=IF(C2="WORKING","OK","CHECK")', desc: "Machine status" }
  ]
},

{
  id: 1006,
  name: "CONSTRUCTION DAILY WORK REPORT",
  icon: "📋",
  category: "Construction",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Daily site work, progress और worker performance tracking",
  tags: ["DAILY","WORK","SITE","REPORT","CONSTRUCTION"],
  formulas: [
    { label: "Total Work Entries", code: '=COUNTA(B2:B100)', desc: "All daily entries" },
    { label: "Completed Work", code: '=COUNTIF(C2:C100,"DONE")', desc: "Finished tasks" },
    { label: "Pending Work", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Incomplete tasks" },
    { label: "In Progress Work", code: '=COUNTIF(C2:C100,"IN PROGRESS")', desc: "Ongoing work" },
    { label: "Total Hours", code: '=SUM(D2:D100)', desc: "Work hours" },
    { label: "Average Hours", code: '=AVERAGE(D2:D100)', desc: "Daily average hours" },
    { label: "Highest Hours", code: '=MAX(D2:D100)', desc: "Max working hours" },
    { label: "Lowest Hours", code: '=MIN(D2:D100)', desc: "Minimum hours" },
    { label: "Productivity %", code: '=COUNTIF(C2:C100,"DONE")/COUNTA(B2:B100)*100', desc: "Efficiency rate" },
    { label: "Work Status", code: '=IF(C2="DONE","GOOD","CHECK")', desc: "Daily status" }
  ]
},
    {
  id: 1007,
  name: "CONSTRUCTION EXPENSE REPORT",
  icon: "💰",
  category: "Construction",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Site expenses, budget control और cost tracking के लिए",
  tags: ["EXPENSE","COST","BUDGET","FINANCE","SITE"],
  formulas: [
    { label: "Total Expense", code: '=SUM(B2:B100)', desc: "All expenses" },
    { label: "Material Expense", code: '=SUMIF(C2:C100,"MATERIAL",B2:B100)', desc: "Material cost" },
    { label: "Labor Expense", code: '=SUMIF(C2:C100,"LABOR",B2:B100)', desc: "Labor cost" },
    { label: "Equipment Expense", code: '=SUMIF(C2:C100,"EQUIPMENT",B2:B100)', desc: "Machine cost" },
    { label: "Transport Expense", code: '=SUMIF(C2:C100,"TRANSPORT",B2:B100)', desc: "Transport cost" },
    { label: "Highest Expense", code: '=MAX(B2:B100)', desc: "Max spending" },
    { label: "Lowest Expense", code: '=MIN(B2:B100)', desc: "Min spending" },
    { label: "Average Expense", code: '=AVERAGE(B2:B100)', desc: "Average cost" },
    { label: "Budget Remaining", code: '=F2-SUM(B2:B100)', desc: "Left budget" },
    { label: "Expense Status", code: '=IF(SUM(B2:B100)>F2,"OVER BUDGET","OK")', desc: "Budget status" }
  ]
},

{
  id: 1008,
  name: "CONSTRUCTION SITE SAFETY REPORT",
  icon: "⚠️",
  category: "Construction",
  color: "#fb8c00",
  colorRgb: "rgba(251,140,0,0.25)",
  use: "Safety incidents, accidents और site safety monitoring के लिए",
  tags: ["SAFETY","ACCIDENT","SITE","SECURITY","CONSTRUCTION"],
  formulas: [
    { label: "Total Workers", code: '=COUNTA(B2:B100)', desc: "Site workers" },
    { label: "Safe Days", code: '=COUNTIF(C2:C100,"SAFE")', desc: "No accident days" },
    { label: "Accident Days", code: '=COUNTIF(C2:C100,"ACCIDENT")', desc: "Accident records" },
    { label: "Minor Injuries", code: '=COUNTIF(D2:D100,"MINOR")', desc: "Small injuries" },
    { label: "Major Injuries", code: '=COUNTIF(D2:D100,"MAJOR")', desc: "Serious injuries" },
    { label: "Safety Score", code: '=COUNTIF(C2:C100,"SAFE")/COUNTA(B2:B100)*100', desc: "Safety percentage" },
    { label: "Risk Level", code: '=IF(E2>5,"HIGH","LOW")', desc: "Risk status" },
    { label: "Safety Equipment Used", code: '=COUNTIF(F2:F100,"YES")', desc: "Protection usage" },
    { label: "Accident Rate", code: '=COUNTIF(C2:C100,"ACCIDENT")/COUNTA(B2:B100)*100', desc: "Accident percentage" },
    { label: "Safety Status", code: '=IF(C2="SAFE","OK","CHECK")', desc: "Overall safety" }
  ]
},

{
  id: 1009,
  name: "CONSTRUCTION FINAL PROJECT DASHBOARD",
  icon: "📊",
  category: "Construction",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Complete project summary, progress और final construction analytics",
  tags: ["FINAL","DASHBOARD","PROJECT","SUMMARY","CONSTRUCTION"],
  formulas: [
    { label: "Total Project Cost", code: '=SUM(B2:B100)', desc: "Overall cost" },
    { label: "Total Work Completed", code: '=COUNTIF(C2:C100,"DONE")', desc: "Completed tasks" },
    { label: "Total Pending Work", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Remaining tasks" },
    { label: "Total Revenue", code: '=SUM(D2:D100)', desc: "Project income" },
    { label: "Net Profit", code: '=SUM(D2:D100)-SUM(B2:B100)', desc: "Final profit" },
    { label: "Completion %", code: '=COUNTIF(C2:C100,"DONE")/COUNTA(C2:C100)*100', desc: "Project progress" },
    { label: "Highest Cost Task", code: '=MAX(B2:B100)', desc: "Expensive task" },
    { label: "Lowest Cost Task", code: '=MIN(B2:B100)', desc: "Cheap task" },
    { label: "Average Cost", code: '=AVERAGE(B2:B100)', desc: "Average expense" },
    { label: "Project Status", code: '=IF(D2>B2,"PROFIT","LOSS")', desc: "Final result" }
  ]
},
    {
  id: 1010,
  name: "CONSTRUCTION PROJECT TIMELINE REPORT",
  icon: "📅",
  category: "Construction",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Project start-end dates, delay और timeline tracking के लिए",
  tags: ["TIMELINE","PROJECT","DATE","TRACKING","CONSTRUCTION"],
  formulas: [
    { label: "Total Tasks", code: '=COUNTA(B2:B100)', desc: "All project tasks" },
    { label: "Completed Tasks", code: '=COUNTIF(C2:C100,"DONE")', desc: "Finished tasks" },
    { label: "Pending Tasks", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Remaining tasks" },
    { label: "Delayed Tasks", code: '=COUNTIF(D2:D100,"DELAYED")', desc: "Late tasks" },
    { label: "On Time Tasks", code: '=COUNTIF(D2:D100,"ONTIME")', desc: "On-time tasks" },
    { label: "Total Days", code: '=SUM(E2:E100)', desc: "Project duration" },
    { label: "Average Delay", code: '=AVERAGE(F2:F100)', desc: "Delay average" },
    { label: "Completion %", code: '=COUNTIF(C2:C100,"DONE")/COUNTA(B2:B100)*100', desc: "Progress rate" },
    { label: "Fast Completion", code: '=COUNTIF(E2:E100,"<10")', desc: "Fast tasks" },
    { label: "Status", code: '=IF(C2="DONE","OK","CHECK")', desc: "Task status" }
  ]
},

{
  id: 1011,
  name: "CONSTRUCTION MACHINE USAGE REPORT",
  icon: "🚜",
  category: "Construction",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Machine usage time, efficiency और fuel tracking के लिए",
  tags: ["MACHINE","USAGE","FUEL","EQUIPMENT","SITE"],
  formulas: [
    { label: "Total Machines", code: '=COUNTA(B2:B100)', desc: "All equipment" },
    { label: "Active Machines", code: '=COUNTIF(C2:C100,"ACTIVE")', desc: "Working machines" },
    { label: "Idle Machines", code: '=COUNTIF(C2:C100,"IDLE")', desc: "Not working" },
    { label: "Maintenance Machines", code: '=COUNTIF(C2:C100,"MAINTENANCE")', desc: "Under repair" },
    { label: "Total Fuel Used", code: '=SUM(D2:D100)', desc: "Fuel consumption" },
    { label: "Average Usage", code: '=AVERAGE(E2:E100)', desc: "Usage hours" },
    { label: "Highest Usage", code: '=MAX(E2:E100)', desc: "Max usage" },
    { label: "Lowest Usage", code: '=MIN(E2:E100)', desc: "Min usage" },
    { label: "Efficiency %", code: '=COUNTIF(C2:C100,"ACTIVE")/COUNTA(B2:B100)*100', desc: "Machine efficiency" },
    { label: "Status", code: '=IF(C2="ACTIVE","OK","CHECK")', desc: "Machine status" }
  ]
},

{
  id: 1012,
  name: "CONSTRUCTION DAILY LABOR ATTENDANCE REPORT",
  icon: "👷",
  category: "Construction",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Daily worker attendance और salary calculation के लिए",
  tags: ["LABOR","ATTENDANCE","DAILY","SALARY","SITE"],
  formulas: [
    { label: "Total Workers", code: '=COUNTA(B2:B100)', desc: "All workers" },
    { label: "Present Workers", code: '=COUNTIF(C2:C100,"PRESENT")', desc: "Working workers" },
    { label: "Absent Workers", code: '=COUNTIF(C2:C100,"ABSENT")', desc: "Not present" },
    { label: "Half Day Workers", code: '=COUNTIF(C2:C100,"HALF")', desc: "Half day workers" },
    { label: "Total Salary", code: '=SUM(D2:D100)', desc: "Total wages" },
    { label: "Average Salary", code: '=AVERAGE(D2:D100)', desc: "Avg wage" },
    { label: "Overtime Count", code: '=COUNTIF(E2:E100,">8")', desc: "Extra work hours" },
    { label: "Attendance %", code: '=COUNTIF(C2:C100,"PRESENT")/COUNTA(B2:B100)*100', desc: "Attendance rate" },
    { label: "Top Worker Pay", code: '=MAX(D2:D100)', desc: "Highest salary" },
    { label: "Status", code: '=IF(D2>1000,"HIGH COST","NORMAL")', desc: "Salary status" }
  ]
},

{
  id: 1013,
  name: "CONSTRUCTION RAW MATERIAL COST REPORT",
  icon: "🧱",
  category: "Construction",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Raw material pricing, cost control और budget analysis के लिए",
  tags: ["MATERIAL","COST","BUDGET","RAW","CONSTRUCTION"],
  formulas: [
    { label: "Total Items", code: '=COUNTA(B2:B100)', desc: "Material items" },
    { label: "Total Cost", code: '=SUM(C2:C100)', desc: "Total cost" },
    { label: "Highest Cost Item", code: '=MAX(C2:C100)', desc: "Expensive item" },
    { label: "Lowest Cost Item", code: '=MIN(C2:C100)', desc: "Cheap item" },
    { label: "Average Cost", code: '=AVERAGE(C2:C100)', desc: "Average cost" },
    { label: "Used Material Cost", code: '=SUM(D2:D100)', desc: "Used cost" },
    { label: "Remaining Budget", code: '=E2-SUM(C2:C100)', desc: "Left budget" },
    { label: "Over Budget Items", code: '=COUNTIF(C2:C100,">E2")', desc: "High cost items" },
    { label: "Low Cost Items", code: '=COUNTIF(C2:C100,"<1000")', desc: "Cheap items" },
    { label: "Status", code: '=IF(SUM(C2:C100)>E2,"OVER","OK")', desc: "Budget status" }
  ]
},

{
  id: 1014,
  name: "CONSTRUCTION FINAL PROJECT SUMMARY REPORT",
  icon: "🏗️",
  category: "Construction",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "Complete project final report, profit-loss और performance summary",
  tags: ["FINAL","PROJECT","SUMMARY","PROFIT","CONSTRUCTION"],
  formulas: [
    { label: "Total Project Cost", code: '=SUM(B2:B100)', desc: "Total expenses" },
    { label: "Total Revenue", code: '=SUM(C2:C100)', desc: "Total income" },
    { label: "Net Profit", code: '=SUM(C2:C100)-SUM(B2:B100)', desc: "Final profit" },
    { label: "Completed Tasks", code: '=COUNTIF(D2:D100,"DONE")', desc: "Finished work" },
    { label: "Pending Tasks", code: '=COUNTIF(D2:D100,"PENDING")', desc: "Remaining work" },
    { label: "Completion %", code: '=COUNTIF(D2:D100,"DONE")/COUNTA(D2:D100)*100', desc: "Project progress" },
    { label: "Highest Cost", code: '=MAX(B2:B100)', desc: "Max expense" },
    { label: "Lowest Cost", code: '=MIN(B2:B100)', desc: "Min expense" },
    { label: "Average Cost", code: '=AVERAGE(B2:B100)', desc: "Average cost" },
    { label: "Status", code: '=IF(C2>B2,"PROFIT","LOSS")', desc: "Final status" }
  ]
},
    {
  id: 1015,
  name: "CONSTRUCTION SITE INSPECTION REPORT",
  icon: "🔍",
  category: "Construction",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Site inspection, quality check और compliance tracking के लिए",
  tags: ["INSPECTION","QUALITY","SITE","CHECK","CONSTRUCTION"],
  formulas: [
    { label: "Total Inspections", code: '=COUNTA(B2:B100)', desc: "All inspection records" },
    { label: "Passed Inspections", code: '=COUNTIF(C2:C100,"PASS")', desc: "Approved sites" },
    { label: "Failed Inspections", code: '=COUNTIF(C2:C100,"FAIL")', desc: "Rejected sites" },
    { label: "Pending Inspections", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Waiting checks" },
    { label: "Average Quality Score", code: '=AVERAGE(D2:D100)', desc: "Quality rating" },
    { label: "High Quality Sites", code: '=COUNTIF(D2:D100,">80")', desc: "Good sites" },
    { label: "Low Quality Sites", code: '=COUNTIF(D2:D100,"<50")', desc: "Poor sites" },
    { label: "Total Defects", code: '=SUM(E2:E100)', desc: "Site issues" },
    { label: "Inspection Rate %", code: '=COUNTIF(C2:C100,"PASS")/COUNTA(B2:B100)*100', desc: "Success rate" },
    { label: "Status", code: '=IF(D2>70,"OK","NEEDS IMPROVEMENT")', desc: "Site quality status" }
  ]
},

{
  id: 1016,
  name: "CONSTRUCTION PROJECT RISK REPORT",
  icon: "⚠️",
  category: "Construction",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Project risk analysis, safety और delay prediction के लिए",
  tags: ["RISK","SAFETY","DELAY","PROJECT","CONSTRUCTION"],
  formulas: [
    { label: "Total Risks", code: '=COUNTA(B2:B100)', desc: "All risk entries" },
    { label: "High Risk", code: '=COUNTIF(C2:C100,"HIGH")', desc: "Danger level high" },
    { label: "Medium Risk", code: '=COUNTIF(C2:C100,"MEDIUM")', desc: "Moderate risk" },
    { label: "Low Risk", code: '=COUNTIF(C2:C100,"LOW")', desc: "Safe conditions" },
    { label: "Risk Score Avg", code: '=AVERAGE(D2:D100)', desc: "Overall risk level" },
    { label: "Critical Issues", code: '=COUNTIF(E2:E100,"CRITICAL")', desc: "Serious problems" },
    { label: "Delayed Tasks", code: '=COUNTIF(F2:F100,"DELAYED")', desc: "Late activities" },
    { label: "Safe Projects", code: '=COUNTIF(C2:C100,"LOW")', desc: "Safe projects" },
    { label: "Risk Percentage", code: '=COUNTIF(C2:C100,"HIGH")/COUNTA(B2:B100)*100', desc: "Risk ratio" },
    { label: "Status", code: '=IF(D2>70,"RISKY","SAFE")', desc: "Overall risk status" }
  ]
},

{
  id: 1017,
  name: "CONSTRUCTION MATERIAL PURCHASE REPORT",
  icon: "🧾",
  category: "Construction",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Material buying, supplier cost और purchase tracking के लिए",
  tags: ["PURCHASE","MATERIAL","SUPPLIER","COST","CONSTRUCTION"],
  formulas: [
    { label: "Total Purchases", code: '=COUNTA(B2:B100)', desc: "All purchase entries" },
    { label: "Total Amount", code: '=SUM(C2:C100)', desc: "Total purchase cost" },
    { label: "Paid Amount", code: '=SUM(D2:D100)', desc: "Paid money" },
    { label: "Pending Amount", code: '=C2-D2', desc: "Remaining payment" },
    { label: "Highest Purchase", code: '=MAX(C2:C100)', desc: "Biggest order" },
    { label: "Lowest Purchase", code: '=MIN(C2:C100)', desc: "Smallest order" },
    { label: "Average Purchase", code: '=AVERAGE(C2:C100)', desc: "Average cost" },
    { label: "Top Supplier Orders", code: '=COUNTIF(E2:E100,"TOP")', desc: "Best suppliers" },
    { label: "Pending Bills", code: '=COUNTIF(D2:D100,"<C2")', desc: "Unpaid orders" },
    { label: "Status", code: '=IF(D2>=C2,"PAID","PENDING")', desc: "Payment status" }
  ]
},

{
  id: 1018,
  name: "CONSTRUCTION SITE PRODUCTIVITY REPORT",
  icon: "📈",
  category: "Construction",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Worker productivity, efficiency और daily output tracking के लिए",
  tags: ["PRODUCTIVITY","EFFICIENCY","WORK","SITE","CONSTRUCTION"],
  formulas: [
    { label: "Total Workers", code: '=COUNTA(B2:B100)', desc: "All workers" },
    { label: "Active Workers", code: '=COUNTIF(C2:C100,"ACTIVE")', desc: "Working staff" },
    { label: "Idle Workers", code: '=COUNTIF(C2:C100,"IDLE")', desc: "Not working" },
    { label: "Total Output", code: '=SUM(D2:D100)', desc: "Work output" },
    { label: "Average Output", code: '=AVERAGE(D2:D100)', desc: "Efficiency avg" },
    { label: "High Productivity", code: '=COUNTIF(D2:D100,">80")', desc: "Best performance" },
    { label: "Low Productivity", code: '=COUNTIF(D2:D100,"<40")', desc: "Weak performance" },
    { label: "Efficiency %", code: '=SUM(D2:D100)/COUNTA(B2:B100)', desc: "Work efficiency" },
    { label: "Best Worker", code: '=MAX(D2:D100)', desc: "Top output" },
    { label: "Status", code: '=IF(D2>60,"GOOD","NEED IMPROVEMENT")', desc: "Performance status" }
  ]
},
    {
  id: 1019,
  name: "CONSTRUCTION EQUIPMENT MAINTENANCE REPORT",
  icon: "🔧",
  category: "Construction",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "Machine maintenance, repair schedule और breakdown tracking के लिए",
  tags: ["EQUIPMENT","MAINTENANCE","REPAIR","MACHINE","CONSTRUCTION"],
  formulas: [
    { label: "Total Machines", code: '=COUNTA(B2:B100)', desc: "All equipment" },
    { label: "Working Machines", code: '=COUNTIF(C2:C100,"WORKING")', desc: "Active machines" },
    { label: "Under Maintenance", code: '=COUNTIF(C2:C100,"MAINTENANCE")', desc: "Repair mode" },
    { label: "Broken Machines", code: '=COUNTIF(C2:C100,"BROKEN")', desc: "Not working machines" },
    { label: "Maintenance Cost", code: '=SUM(D2:D100)', desc: "Total repair cost" },
    { label: "Average Repair Time", code: '=AVERAGE(E2:E100)', desc: "Repair duration" },
    { label: "High Cost Repair", code: '=MAX(D2:D100)', desc: "Expensive repair" },
    { label: "Low Cost Repair", code: '=MIN(D2:D100)', desc: "Cheap repair" },
    { label: "Machine Uptime %", code: '=COUNTIF(C2:C100,"WORKING")/COUNTA(B2:B100)*100', desc: "Availability rate" },
    { label: "Status", code: '=IF(C2="WORKING","OK","CHECK")', desc: "Machine status" }
  ]
},

{
  id: 1020,
  name: "CONSTRUCTION DAILY SITE REPORT SUMMARY",
  icon: "📊",
  category: "Construction",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Daily site summary, progress और work monitoring के लिए",
  tags: ["DAILY","SUMMARY","SITE","WORK","CONSTRUCTION"],
  formulas: [
    { label: "Total Tasks", code: '=COUNTA(B2:B100)', desc: "All daily tasks" },
    { label: "Completed Tasks", code: '=COUNTIF(C2:C100,"DONE")', desc: "Finished work" },
    { label: "Pending Tasks", code: '=COUNTIF(C2:C100,"PENDING")', desc: "Remaining work" },
    { label: "In Progress", code: '=COUNTIF(C2:C100,"IN PROGRESS")', desc: "Ongoing tasks" },
    { label: "Total Hours Worked", code: '=SUM(D2:D100)', desc: "Work hours" },
    { label: "Average Hours", code: '=AVERAGE(D2:D100)', desc: "Daily average" },
    { label: "Highest Hours", code: '=MAX(D2:D100)', desc: "Max work time" },
    { label: "Lowest Hours", code: '=MIN(D2:D100)', desc: "Min work time" },
    { label: "Productivity %", code: '=COUNTIF(C2:C100,"DONE")/COUNTA(B2:B100)*100', desc: "Efficiency rate" },
    { label: "Status", code: '=IF(C2="DONE","GOOD","CHECK")', desc: "Daily status" }
  ]
},

{
  id: 1021,
  name: "CONSTRUCTION SITE BUDGET CONTROL REPORT",
  icon: "💰",
  category: "Construction",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Budget planning, cost control और overspending tracking के लिए",
  tags: ["BUDGET","COST","CONTROL","FINANCE","SITE"],
  formulas: [
    { label: "Total Budget", code: '=SUM(B2:B100)', desc: "Allocated budget" },
    { label: "Total Spend", code: '=SUM(C2:C100)', desc: "Used money" },
    { label: "Remaining Budget", code: '=B2-C2', desc: "Left money" },
    { label: "Overspend Items", code: '=COUNTIF(C2:C100,">B2")', desc: "Exceeded budget" },
    { label: "Under Budget Items", code: '=COUNTIF(C2:C100,"<B2")', desc: "Saved cost" },
    { label: "Highest Spend", code: '=MAX(C2:C100)', desc: "Biggest expense" },
    { label: "Lowest Spend", code: '=MIN(C2:C100)', desc: "Smallest expense" },
    { label: "Average Spend", code: '=AVERAGE(C2:C100)', desc: "Average cost" },
    { label: "Budget Usage %", code: '=SUM(C2:C100)/SUM(B2:B100)*100', desc: "Budget used rate" },
    { label: "Status", code: '=IF(SUM(C2:C100)>SUM(B2:B100),"OVER BUDGET","OK")', desc: "Budget status" }
  ]
},

{
  id: 1022,
  name: "CONSTRUCTION FINAL PERFORMANCE DASHBOARD",
  icon: "🏁",
  category: "Construction",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Complete project performance, profit-loss और final summary dashboard",
  tags: ["FINAL","DASHBOARD","PERFORMANCE","PROJECT","SUMMARY"],
  formulas: [
    { label: "Total Project Cost", code: '=SUM(B2:B100)', desc: "Total expense" },
    { label: "Total Revenue", code: '=SUM(C2:C100)', desc: "Income" },
    { label: "Net Profit", code: '=SUM(C2:C100)-SUM(B2:B100)', desc: "Final profit" },
    { label: "Completed Tasks", code: '=COUNTIF(D2:D100,"DONE")', desc: "Finished work" },
    { label: "Pending Tasks", code: '=COUNTIF(D2:D100,"PENDING")', desc: "Remaining work" },
    { label: "Completion %", code: '=COUNTIF(D2:D100,"DONE")/COUNTA(D2:D100)*100', desc: "Progress rate" },
    { label: "Highest Cost", code: '=MAX(B2:B100)', desc: "Max expense" },
    { label: "Lowest Cost", code: '=MIN(B2:B100)', desc: "Min expense" },
    { label: "Average Cost", code: '=AVERAGE(B2:B100)', desc: "Avg cost" },
    { label: "Status", code: '=IF(C2>B2,"PROFIT","LOSS")', desc: "Final result" }
  ]
},
    {
  id: 1023,
  name: "CONSTRUCTION MATERIAL WASTAGE REPORT",
  icon: "🧱",
  category: "Construction",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Material wastage, loss control और site efficiency के लिए",
  formulas: [
    { label: "Total Material", code: '=SUM(B2:B100)', desc: "Total used material" },
    { label: "Wasted Material", code: '=SUM(C2:C100)', desc: "Wastage amount" },
    { label: "Recovered Material", code: '=SUM(D2:D100)', desc: "Recovered items" },
    { label: "Net Usage", code: '=B2-C2', desc: "Actual usage" },
    { label: "Wastage %", code: '=C2/B2*100', desc: "Loss percentage" },
    { label: "High Waste Items", code: '=COUNTIF(C2:C100,">50")', desc: "Major loss items" },
    { label: "Low Waste Items", code: '=COUNTIF(C2:C100,"<10")', desc: "Minor loss items" },
    { label: "Total Cost Loss", code: '=SUM(E2:E100)', desc: "Money loss" },
    { label: "Average Waste", code: '=AVERAGE(C2:C100)', desc: "Avg wastage" },
    { label: "Status", code: '=IF(C2>20,"HIGH LOSS","OK")', desc: "Waste status" }
  ]
},

{
  id: 1024,
  name: "CONSTRUCTION WORKER SAFETY TRAINING REPORT",
  icon: "🦺",
  category: "Construction",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Safety training, certification और compliance tracking",
  formulas: [
    { label: "Total Workers", code: '=COUNTA(B2:B100)', desc: "All workers" },
    { label: "Trained Workers", code: '=COUNTIF(C2:C100,"TRAINED")', desc: "Safety trained" },
    { label: "Untrained Workers", code: '=COUNTIF(C2:C100,"UNTRAINED")', desc: "Not trained" },
    { label: "Certifications Done", code: '=COUNTIF(D2:D100,"YES")', desc: "Certified workers" },
    { label: "Training Hours", code: '=SUM(E2:E100)', desc: "Total training time" },
    { label: "Avg Training Score", code: '=AVERAGE(F2:F100)', desc: "Performance score" },
    { label: "High Score Workers", code: '=COUNTIF(F2:F100,">80")', desc: "Good performers" },
    { label: "Low Score Workers", code: '=COUNTIF(F2:F100,"<50")', desc: "Weak performers" },
    { label: "Training %", code: '=COUNTIF(C2:C100,"TRAINED")/COUNTA(B2:B100)*100', desc: "Training rate" },
    { label: "Status", code: '=IF(F2>70,"GOOD","NEED TRAINING")', desc: "Safety status" }
  ]
},

{
  id: 1025,
  name: "CONSTRUCTION SITE MATERIAL DELIVERY REPORT",
  icon: "🚚",
  category: "Construction",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Material delivery tracking, supplier performance और delay analysis",
  formulas: [
    { label: "Total Deliveries", code: '=COUNTA(B2:B100)', desc: "All deliveries" },
    { label: "On Time Deliveries", code: '=COUNTIF(C2:C100,"ONTIME")', desc: "Timely delivery" },
    { label: "Delayed Deliveries", code: '=COUNTIF(C2:C100,"DELAYED")', desc: "Late delivery" },
    { label: "Rejected Deliveries", code: '=COUNTIF(C2:C100,"REJECTED")', desc: "Bad quality" },
    { label: "Total Quantity", code: '=SUM(D2:D100)', desc: "Material quantity" },
    { label: "Average Delay", code: '=AVERAGE(E2:E100)', desc: "Delay time" },
    { label: "Best Supplier", code: '=MAX(F2:F100)', desc: "Top supplier score" },
    { label: "Worst Supplier", code: '=MIN(F2:F100)', desc: "Low supplier score" },
    { label: "Delivery Rate %", code: '=COUNTIF(C2:C100,"ONTIME")/COUNTA(B2:B100)*100', desc: "Success rate" },
    { label: "Status", code: '=IF(C2="ONTIME","OK","CHECK")', desc: "Delivery status" }
  ]
},

{
  id: 1026,
  name: "CONSTRUCTION PROJECT FINAL COST SHEET",
  icon: "📒",
  category: "Construction",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Final project costing, profit-loss और audit sheet",
  formulas: [
    { label: "Total Material Cost", code: '=SUM(B2:B100)', desc: "Material expense" },
    { label: "Labor Cost", code: '=SUM(C2:C100)', desc: "Worker cost" },
    { label: "Equipment Cost", code: '=SUM(D2:D100)', desc: "Machine cost" },
    { label: "Total Cost", code: '=SUM(B2:D100)', desc: "Overall cost" },
    { label: "Total Revenue", code: '=SUM(E2:E100)', desc: "Income" },
    { label: "Net Profit", code: '=SUM(E2:E100)-SUM(B2:D100)', desc: "Final profit" },
    { label: "Profit %", code: '=(E2-SUM(B2:D100))/E2*100', desc: "Profit ratio" },
    { label: "Highest Expense", code: '=MAX(B2:D100)', desc: "Max cost item" },
    { label: "Lowest Expense", code: '=MIN(B2:D100)', desc: "Min cost item" },
    { label: "Status", code: '=IF(E2>B2+B2+B2,"PROFIT","LOSS")', desc: "Final status check" }
  ]
},

{
  id: 1027,
  name: "CONSTRUCTION PROJECT COMPLETE SUMMARY DASHBOARD",
  icon: "🏁",
  category: "Construction",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "FINAL COMPLETE DASHBOARD – FULL PROJECT ANALYSIS",
  formulas: [
    { label: "Total Cost", code: '=SUM(B2:B100)', desc: "All expenses" },
    { label: "Total Revenue", code: '=SUM(C2:C100)', desc: "Total income" },
    { label: "Net Profit", code: '=SUM(C2:C100)-SUM(B2:B100)', desc: "Final profit" },
    { label: "Completed Work", code: '=COUNTIF(D2:D100,"DONE")', desc: "Finished tasks" },
    { label: "Pending Work", code: '=COUNTIF(D2:D100,"PENDING")', desc: "Remaining tasks" },
    { label: "Progress %", code: '=COUNTIF(D2:D100,"DONE")/COUNTA(D2:D100)*100', desc: "Project progress" },
    { label: "Best Performance", code: '=MAX(E2:E100)', desc: "Top score" },
    { label: "Lowest Performance", code: '=MIN(E2:E100)', desc: "Weak score" },
    { label: "Average Score", code: '=AVERAGE(E2:E100)', desc: "Overall rating" },
    { label: "FINAL STATUS", code: '=IF(C2>B2,"COMPLETE PROFIT","LOSS")', desc: "Project result" }
  ]
},
    // CONSTRUCTION REPORTS 👆
   // ADVANCED REPORTS 👇
    {
  id: 1027,
  name: "ADVANCED DASHBOARD REPORT",
  icon: "📊",
  category: "Advanced",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "All system data ka combined real-time dashboard",
  formulas: [
    { label: "Total Users", code: '=COUNTA(A2:A1000)', desc: "All users" },
    { label: "Active Users", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Logged in users" },
    { label: "Inactive Users", code: '=COUNTIF(B2:B1000,"INACTIVE")', desc: "Not active users" },
    { label: "Total Revenue", code: '=SUM(C2:C1000)', desc: "Income" },
    { label: "Total Expense", code: '=SUM(D2:D1000)', desc: "Cost" },
    { label: "Net Profit", code: '=C2-D2', desc: "Profit calculation" },
    { label: "Growth %", code: '=(C2-D2)/D2*100', desc: "Growth rate" },
    { label: "Highest Value", code: '=MAX(C2:C1000)', desc: "Max data" },
    { label: "Lowest Value", code: '=MIN(C2:C1000)', desc: "Min data" },
    { label: "Status", code: '=IF(C2>D2,"PROFIT","LOSS")', desc: "Overall status" }
  ]
},

{
  id: 2002,
  name: "ADVANCED ANALYTICS REPORT",
  icon: "📈",
  category: "Advanced",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Business analytics & performance tracking",
  formulas: [
    { label: "Total Records", code: '=COUNTA(A2:A1000)', desc: "Data entries" },
    { label: "Average Value", code: '=AVERAGE(B2:B1000)', desc: "Mean value" },
    { label: "Median Value", code: '=MEDIAN(B2:B1000)', desc: "Middle value" },
    { label: "Max Value", code: '=MAX(B2:B1000)', desc: "Highest value" },
    { label: "Min Value", code: '=MIN(B2:B1000)', desc: "Lowest value" },
    { label: "Standard Deviation", code: '=STDEV(B2:B1000)', desc: "Data spread" },
    { label: "Variance", code: '=VAR(B2:B1000)', desc: "Data variance" },
    { label: "Growth Rate", code: '=(B1000-B2)/B2*100', desc: "Growth %" },
    { label: "Trend Score", code: '=AVERAGE(C2:C1000)', desc: "Trend analysis" },
    { label: "Status", code: '=IF(B1000>B2,"UP","DOWN")', desc: "Trend status" }
  ]
},

{
  id: 2003,
  name: "AI PREDICTION REPORT",
  icon: "🤖",
  category: "Advanced",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Future prediction & AI based forecasting",
  formulas: [
    { label: "Training Data", code: '=COUNTA(A2:A1000)', desc: "AI input data" },
    { label: "Prediction Value", code: '=FORECAST(B2,A2:A1000,B2:B1000)', desc: "Future prediction" },
    { label: "Error Rate", code: '=ABS(C2-D2)', desc: "Prediction error" },
    { label: "Accuracy %", code: '=1-(E2/C2)*100', desc: "Model accuracy" },
    { label: "Trend Up", code: '=COUNTIF(B2:B1000,">100")', desc: "Positive trend" },
    { label: "Trend Down", code: '=COUNTIF(B2:B1000,"<100")', desc: "Negative trend" },
    { label: "Average Prediction", code: '=AVERAGE(C2:C1000)', desc: "Mean forecast" },
    { label: "Max Prediction", code: '=MAX(C2:C1000)', desc: "Peak forecast" },
    { label: "Min Prediction", code: '=MIN(C2:C1000)', desc: "Low forecast" },
    { label: "AI Status", code: '=IF(E2<10,"ACCURATE","RETRAIN")', desc: "Model status" }
  ]
},

{
  id: 2004,
  name: "USER ACTIVITY REPORT",
  icon: "👤",
  category: "Advanced",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "User login, activity & behavior tracking",
  formulas: [
    { label: "Total Users", code: '=COUNTA(A2:A1000)', desc: "Registered users" },
    { label: "Active Users", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Online users" },
    { label: "Inactive Users", code: '=COUNTIF(B2:B1000,"INACTIVE")', desc: "Offline users" },
    { label: "Login Count", code: '=SUM(C2:C1000)', desc: "Total logins" },
    { label: "Avg Session Time", code: '=AVERAGE(D2:D1000)', desc: "Usage time" },
    { label: "High Activity Users", code: '=COUNTIF(C2:C1000,">10")', desc: "Power users" },
    { label: "Low Activity Users", code: '=COUNTIF(C2:C1000,"<2")', desc: "Inactive users" },
    { label: "Bounce Rate", code: '=COUNTIF(E2:E1000,"EXIT")/COUNTA(A2:A1000)*100', desc: "Exit rate" },
    { label: "Retention Rate", code: '=COUNTIF(B2:B1000,"ACTIVE")/COUNTA(A2:A1000)*100', desc: "User retention" },
    { label: "Status", code: '=IF(C2>5,"GOOD","LOW")', desc: "Activity status" }
  ]
},

{
  id: 2005,
  name: "LOGIN & SECURITY REPORT",
  icon: "🔐",
  category: "Advanced",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "System login security, access control & threat monitoring",
  formulas: [
    { label: "Total Logins", code: '=COUNTA(A2:A1000)', desc: "All login attempts" },
    { label: "Successful Logins", code: '=COUNTIF(B2:B1000,"SUCCESS")', desc: "Valid logins" },
    { label: "Failed Logins", code: '=COUNTIF(B2:B1000,"FAILED")', desc: "Wrong attempts" },
    { label: "Blocked Users", code: '=COUNTIF(C2:C1000,"BLOCKED")', desc: "Security block" },
    { label: "Suspicious Activity", code: '=COUNTIF(D2:D1000,"SUSPICIOUS")', desc: "Threats" },
    { label: "Login Success %", code: '=B2/A2*100', desc: "Success rate" },
    { label: "Failure Rate %", code: '=C2/A2*100', desc: "Failure rate" },
    { label: "Security Score", code: '=1-(C2/A2)*100', desc: "System safety" },
    { label: "Highest Risk", code: '=MAX(D2:D1000)', desc: "Max threat level" },
    { label: "Status", code: '=IF(C2>10,"RISK","SAFE")', desc: "Security status" }
  ]
},
    {
  id: 2006,
  name: "BACKUP REPORT",
  icon: "💾",
  category: "Advanced",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "System backup, data restore और safety tracking",
  formulas: [
    { label: "Total Backups", code: '=COUNTA(A2:A1000)', desc: "All backups" },
    { label: "Successful Backups", code: '=COUNTIF(B2:B1000,"SUCCESS")', desc: "Completed backups" },
    { label: "Failed Backups", code: '=COUNTIF(B2:B1000,"FAILED")', desc: "Error backups" },
    { label: "Storage Used", code: '=SUM(C2:C1000)', desc: "Backup size" },
    { label: "Available Space", code: '=D2-SUM(C2:C1000)', desc: "Free storage" },
    { label: "Backup Success %", code: '=B2/A2*100', desc: "Success rate" },
    { label: "Largest Backup", code: '=MAX(C2:C1000)', desc: "Big file" },
    { label: "Smallest Backup", code: '=MIN(C2:C1000)', desc: "Small file" },
    { label: "Avg Backup Size", code: '=AVERAGE(C2:C1000)', desc: "Average size" },
    { label: "Status", code: '=IF(B2>A2*0.9,"GOOD","CHECK")', desc: "Backup health" }
  ]
},

{
  id: 2007,
  name: "EXPORT EXCEL REPORT",
  icon: "📤",
  category: "Advanced",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Data export tracking & file management",
  formulas: [
    { label: "Total Exports", code: '=COUNTA(A2:A1000)', desc: "Export count" },
    { label: "Successful Export", code: '=COUNTIF(B2:B1000,"DONE")', desc: "Completed exports" },
    { label: "Failed Export", code: '=COUNTIF(B2:B1000,"FAILED")', desc: "Error exports" },
    { label: "File Size Total", code: '=SUM(C2:C1000)', desc: "Export size" },
    { label: "Avg File Size", code: '=AVERAGE(C2:C1000)', desc: "Average size" },
    { label: "Max File Size", code: '=MAX(C2:C1000)', desc: "Largest file" },
    { label: "Min File Size", code: '=MIN(C2:C1000)', desc: "Smallest file" },
    { label: "Export Success %", code: '=B2/A2*100', desc: "Success rate" },
    { label: "Pending Exports", code: '=COUNTIF(B2:B1000,"PENDING")', desc: "Waiting exports" },
    { label: "Status", code: '=IF(B2>A2*0.95,"OK","CHECK")', desc: "Export health" }
  ]
},

{
  id: 2008,
  name: "PDF REPORT GENERATION",
  icon: "📄",
  category: "Advanced",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "PDF creation, report generation और document tracking",
  formulas: [
    { label: "Total PDFs", code: '=COUNTA(A2:A1000)', desc: "All PDFs" },
    { label: "Generated PDFs", code: '=COUNTIF(B2:B1000,"DONE")', desc: "Created files" },
    { label: "Failed PDFs", code: '=COUNTIF(B2:B1000,"FAILED")', desc: "Error files" },
    { label: "File Size Total", code: '=SUM(C2:C1000)', desc: "Total PDF size" },
    { label: "Avg Size", code: '=AVERAGE(C2:C1000)', desc: "Average file size" },
    { label: "Max Size", code: '=MAX(C2:C1000)', desc: "Largest PDF" },
    { label: "Min Size", code: '=MIN(C2:C1000)', desc: "Smallest PDF" },
    { label: "Success Rate", code: '=B2/A2*100', desc: "Generation success" },
    { label: "Pending PDFs", code: '=COUNTIF(B2:B1000,"PENDING")', desc: "Waiting files" },
    { label: "Status", code: '=IF(B2>A2*0.9,"GOOD","CHECK")', desc: "PDF system status" }
  ]
},
{
  id: 2009,
  name: "GRAPH REPORT",
  icon: "📊",
  category: "Advanced",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Graph visualization, trend analysis और chart data",
  formulas: [
    { label: "Total Data Points", code: '=COUNTA(A2:A1000)', desc: "Graph data count" },
    { label: "Max Value", code: '=MAX(B2:B1000)', desc: "Peak value" },
    { label: "Min Value", code: '=MIN(B2:B1000)', desc: "Lowest value" },
    { label: "Average Value", code: '=AVERAGE(B2:B1000)', desc: "Mean data" },
    { label: "Trend Up", code: '=COUNTIF(B2:B1000,">100")', desc: "Positive trend" },
    { label: "Trend Down", code: '=COUNTIF(B2:B1000,"<100")', desc: "Negative trend" },
    { label: "Growth %", code: '=(B1000-B2)/B2*100', desc: "Growth rate" },
    { label: "Data Variance", code: '=VAR(B2:B1000)', desc: "Variation" },
    { label: "Standard Deviation", code: '=STDEV(B2:B1000)', desc: "Spread" },
    { label: "Status", code: '=IF(B2>B3,"UP","DOWN")', desc: "Trend status" }
  ]
},

{
  id: 2010,
  name: "REAL TIME REPORT SYSTEM",
  icon: "⚡",
  category: "Advanced",
  color: "#f4511e",
  colorRgb: "rgba(244,81,30,0.25)",
  use: "Live data monitoring, instant updates और real-time analytics",
  formulas: [
    { label: "Live Users", code: '=COUNTA(A2:A1000)', desc: "Online users" },
    { label: "Active Sessions", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Current sessions" },
    { label: "Live Transactions", code: '=SUM(C2:C1000)', desc: "Real-time data" },
    { label: "Instant Revenue", code: '=SUM(D2:D1000)', desc: "Live income" },
    { label: "Instant Expense", code: '=SUM(E2:E1000)', desc: "Live cost" },
    { label: "Net Live Profit", code: '=D2-E2', desc: "Real-time profit" },
    { label: "System Load %", code: '=F2/100*100', desc: "Server load" },
    { label: "Error Count", code: '=COUNTIF(G2:G1000,"ERROR")', desc: "System errors" },
    { label: "Response Time", code: '=AVERAGE(H2:H1000)', desc: "Speed check" },
    { label: "Status", code: '=IF(G2=0,"STABLE","UNSTABLE")', desc: "System health" }
  ]
},
    {
  id: 2011,
  name: "CHART REPORT",
  icon: "📉",
  category: "Advanced",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Data visualization for charts (bar, line, pie analytics)",
  formulas: [
    { label: "Total Chart Data", code: '=COUNTA(A2:A1000)', desc: "Data points" },
    { label: "Max Value", code: '=MAX(B2:B1000)', desc: "Peak chart value" },
    { label: "Min Value", code: '=MIN(B2:B1000)', desc: "Lowest chart value" },
    { label: "Average Value", code: '=AVERAGE(B2:B1000)', desc: "Mean value" },
    { label: "Trend Up", code: '=COUNTIF(B2:B1000,">100")', desc: "Up trend points" },
    { label: "Trend Down", code: '=COUNTIF(B2:B1000,"<100")', desc: "Down trend points" },
    { label: "Chart Growth %", code: '=(B1000-B2)/B2*100', desc: "Growth rate" },
    { label: "Data Variance", code: '=VAR(B2:B1000)', desc: "Data spread" },
    { label: "Chart Stability", code: '=STDEV(B2:B1000)', desc: "Stability score" },
    { label: "Status", code: '=IF(AVERAGE(B2:B1000)>50,"GOOD","LOW")', desc: "Chart status" }
  ]
},

{
  id: 2012,
  name: "REAL TIME CHART DASHBOARD REPORT",
  icon: "⚡📊",
  category: "Advanced",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Live charts + real-time dashboard monitoring system",
  formulas: [
    { label: "Live Data Points", code: '=COUNTA(A2:A1000)', desc: "Real-time inputs" },
    { label: "Active Streams", code: '=COUNTIF(B2:B1000,"LIVE")', desc: "Live feeds" },
    { label: "Total Updates", code: '=SUM(C2:C1000)', desc: "System updates" },
    { label: "Refresh Rate", code: '=AVERAGE(D2:D1000)', desc: "Update speed" },
    { label: "Latency", code: '=AVERAGE(E2:E1000)', desc: "Delay time" },
    { label: "Max Load", code: '=MAX(F2:F1000)', desc: "Peak system load" },
    { label: "Min Load", code: '=MIN(F2:F1000)', desc: "Low system load" },
    { label: "System Efficiency %", code: '=C2/A2*100', desc: "Performance rate" },
    { label: "Error Rate", code: '=COUNTIF(G2:G1000,"ERROR")/COUNTA(A2:A1000)*100', desc: "System errors" },
    { label: "Status", code: '=IF(E2<200,"FAST","SLOW")', desc: "System health" }
  ]
},
    // ADVANCED REPORTS 👆
   // MARKETING REPORTS 👇
    {
  id: 3001,
  name: "CAMPAIGN PERFORMANCE REPORT",
  icon: "📢",
  category: "Marketing",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Marketing campaign ka performance analyze karne ke liye",
  formulas: [
    { label: "Total Campaigns", code: '=COUNTA(A2:A1000)', desc: "All campaigns" },
    { label: "Active Campaigns", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Running campaigns" },
    { label: "Completed Campaigns", code: '=COUNTIF(B2:B1000,"DONE")', desc: "Finished campaigns" },
    { label: "Total Spend", code: '=SUM(C2:C1000)', desc: "Ad spend" },
    { label: "Total Revenue", code: '=SUM(D2:D1000)', desc: "Income" },
    { label: "ROI %", code: '=(D2-C2)/C2*100', desc: "Return on investment" },
    { label: "Best Campaign", code: '=MAX(D2:D1000)', desc: "Top performer" },
    { label: "Worst Campaign", code: '=MIN(D2:D1000)', desc: "Low performer" },
    { label: "Conversion Rate", code: '=D2/C2*100', desc: "Conversion %" },
    { label: "Status", code: '=IF(D2>C2,"PROFIT","LOSS")', desc: "Campaign result" }
  ]
},

{
  id: 3002,
  name: "SOCIAL MEDIA ENGAGEMENT REPORT",
  icon: "👍",
  category: "Marketing",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Social media likes, comments aur engagement track karna",
  formulas: [
    { label: "Total Posts", code: '=COUNTA(A2:A1000)', desc: "All posts" },
    { label: "Total Likes", code: '=SUM(B2:B1000)', desc: "Likes count" },
    { label: "Total Comments", code: '=SUM(C2:C1000)', desc: "Comments count" },
    { label: "Total Shares", code: '=SUM(D2:D1000)', desc: "Shares count" },
    { label: "Engagement Rate", code: '=(B2+C2+D2)/A2*100', desc: "Engagement %" },
    { label: "Best Post", code: '=MAX(B2:B1000)', desc: "Top post" },
    { label: "Worst Post", code: '=MIN(B2:B1000)', desc: "Low post" },
    { label: "Avg Likes", code: '=AVERAGE(B2:B1000)', desc: "Average likes" },
    { label: "Viral Score", code: '=MAX(D2:D1000)', desc: "Virality" },
    { label: "Status", code: '=IF(B2>1000,"VIRAL","NORMAL")', desc: "Post status" }
  ]
},

{
  id: 3003,
  name: "AD SPEND REPORT",
  icon: "💰",
  category: "Marketing",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Advertising budget aur spending track karna",
  formulas: [
    { label: "Total Ads", code: '=COUNTA(A2:A1000)', desc: "All ads" },
    { label: "Total Spend", code: '=SUM(B2:B1000)', desc: "Money spent" },
    { label: "Total Revenue", code: '=SUM(C2:C1000)', desc: "Income" },
    { label: "Profit", code: '=C2-B2', desc: "Net profit" },
    { label: "ROI %", code: '=(C2-B2)/B2*100', desc: "Return %" },
    { label: "Best Ad", code: '=MAX(C2:C1000)', desc: "Top ad" },
    { label: "Worst Ad", code: '=MIN(C2:C1000)', desc: "Weak ad" },
    { label: "Avg Spend", code: '=AVERAGE(B2:B1000)', desc: "Average cost" },
    { label: "Cost per Lead", code: '=B2/D2', desc: "CPL" },
    { label: "Status", code: '=IF(C2>B2,"PROFIT","LOSS")', desc: "Ad result" }
  ]
},

{
  id: 3004,
  name: "LEAD GENERATION REPORT",
  icon: "🎯",
  category: "Marketing",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Leads collect aur conversion track karna",
  formulas: [
    { label: "Total Leads", code: '=COUNTA(A2:A1000)', desc: "All leads" },
    { label: "Qualified Leads", code: '=COUNTIF(B2:B1000,"QUALIFIED")', desc: "Good leads" },
    { label: "Unqualified Leads", code: '=COUNTIF(B2:B1000,"NO")', desc: "Bad leads" },
    { label: "Converted Leads", code: '=COUNTIF(C2:C1000,"CONVERTED")', desc: "Sales leads" },
    { label: "Conversion Rate", code: '=C2/A2*100', desc: "Conversion %" },
    { label: "Lead Value", code: '=SUM(D2:D1000)', desc: "Lead worth" },
    { label: "Avg Lead Score", code: '=AVERAGE(E2:E1000)', desc: "Quality score" },
    { label: "Best Source", code: '=MAX(F2:F1000)', desc: "Top channel" },
    { label: "Cost per Lead", code: '=B2/A2', desc: "CPL" },
    { label: "Status", code: '=IF(C2>10,"GOOD","LOW")', desc: "Lead health" }
  ]
},

{
  id: 3005,
  name: "CONVERSION RATE REPORT",
  icon: "📈",
  category: "Marketing",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Visitors ko customers me convert hone ka analysis",
  formulas: [
    { label: "Total Visitors", code: '=COUNTA(A2:A1000)', desc: "Traffic" },
    { label: "Total Leads", code: '=COUNTIF(B2:B1000,"LEAD")', desc: "Generated leads" },
    { label: "Total Sales", code: '=COUNTIF(C2:C1000,"SALE")', desc: "Conversions" },
    { label: "Conversion Rate %", code: '=C2/A2*100', desc: "Conversion %" },
    { label: "Bounce Rate", code: '=COUNTIF(D2:D1000,"BOUNCE")/A2*100', desc: "Exit rate" },
    { label: "Avg Time", code: '=AVERAGE(E2:E1000)', desc: "Session time" },
    { label: "Best Page", code: '=MAX(F2:F1000)', desc: "Top converting page" },
    { label: "Worst Page", code: '=MIN(F2:F1000)', desc: "Low page" },
    { label: "Revenue", code: '=SUM(G2:G1000)', desc: "Total income" },
    { label: "Status", code: '=IF(C2/B2>0.1,"GOOD","LOW")', desc: "Conversion health" }
  ]
},
    // MARKETING REPORTS👆
    //HR & EMPLOYEE ANALYTICS REPORTS👇
    {
  id: 4001,
  name: "EMPLOYEE PERFORMANCE ANALYTICS REPORT",
  icon: "👥",
  category: "HR",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Employee performance evaluate karne ke liye",
  formulas: [
    { label: "Total Employees", code: '=COUNTA(A2:A1000)', desc: "All employees" },
    { label: "Active Employees", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Working staff" },
    { label: "Top Performers", code: '=COUNTIF(C2:C1000,">80")', desc: "High score" },
    { label: "Low Performers", code: '=COUNTIF(C2:C1000,"<40")', desc: "Weak score" },
    { label: "Average Score", code: '=AVERAGE(C2:C1000)', desc: "Performance avg" },
    { label: "Max Score", code: '=MAX(C2:C1000)', desc: "Best employee" },
    { label: "Min Score", code: '=MIN(C2:C1000)', desc: "Lowest score" },
    { label: "Total Rating", code: '=SUM(C2:C1000)', desc: "Overall rating" },
    { label: "Performance %", code: '=C2/100*100', desc: "Performance rate" },
    { label: "Status", code: '=IF(C2>70,"GOOD","NEED IMPROVEMENT")', desc: "Employee status" }
  ]
},

{
  id: 4002,
  name: "ATTENDANCE TREND REPORT",
  icon: "📊",
  category: "HR",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Employee attendance pattern analysis",
  formulas: [
    { label: "Total Days", code: '=COUNTA(A2:A1000)', desc: "Working days" },
    { label: "Present Days", code: '=COUNTIF(B2:B1000,"PRESENT")', desc: "Attendance" },
    { label: "Absent Days", code: '=COUNTIF(B2:B1000,"ABSENT")', desc: "Missing days" },
    { label: "Late Arrivals", code: '=COUNTIF(C2:C1000,"LATE")', desc: "Late count" },
    { label: "Attendance %", code: '=B2/A2*100', desc: "Attendance rate" },
    { label: "Avg Attendance", code: '=AVERAGE(B2:B1000)', desc: "Average presence" },
    { label: "Best Month", code: '=MAX(B2:B1000)', desc: "Highest attendance" },
    { label: "Worst Month", code: '=MIN(B2:B1000)', desc: "Lowest attendance" },
    { label: "Trend Growth", code: '=(B1000-B2)/B2*100', desc: "Attendance growth" },
    { label: "Status", code: '=IF(B2>90,"EXCELLENT","LOW")', desc: "Attendance status" }
  ]
},

{
  id: 4003,
  name: "EMPLOYEE ATTRITION REPORT",
  icon: "📉",
  category: "HR",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Employee leaving rate aur retention tracking",
  formulas: [
    { label: "Total Employees", code: '=COUNTA(A2:A1000)', desc: "Total staff" },
    { label: "Left Employees", code: '=COUNTIF(B2:B1000,"LEFT")', desc: "Attrition" },
    { label: "New Joiners", code: '=COUNTIF(B2:B1000,"JOINED")', desc: "New hiring" },
    { label: "Retention Rate", code: '=(A2-B2)/A2*100', desc: "Retention %" },
    { label: "Attrition Rate", code: '=B2/A2*100', desc: "Leaving rate" },
    { label: "Avg Tenure", code: '=AVERAGE(C2:C1000)', desc: "Job duration" },
    { label: "High Risk Employees", code: '=COUNTIF(D2:D1000,">80")', desc: "Leaving risk" },
    { label: "Low Risk Employees", code: '=COUNTIF(D2:D1000,"<40")', desc: "Stable staff" },
    { label: "Monthly Attrition", code: '=SUM(B2:B1000)', desc: "Monthly loss" },
    { label: "Status", code: '=IF(B2/A2>0.1,"HIGH RISK","OK")', desc: "Attrition status" }
  ]
},

{
  id: 4004,
  name: "RECRUITMENT REPORT",
  icon: "🧾",
  category: "HR",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Hiring process aur recruitment performance tracking",
  formulas: [
    { label: "Total Applications", code: '=COUNTA(A2:A1000)', desc: "Applicants" },
    { label: "Shortlisted", code: '=COUNTIF(B2:B1000,"SHORTLISTED")', desc: "Selected" },
    { label: "Rejected", code: '=COUNTIF(B2:B1000,"REJECTED")', desc: "Not selected" },
    { label: "Hired", code: '=COUNTIF(B2:B1000,"HIRED")', desc: "Final hiring" },
    { label: "Interview Rate", code: '=C2/A2*100', desc: "Interview %" },
    { label: "Hire Rate", code: '=D2/A2*100', desc: "Hiring %" },
    { label: "Avg Hiring Time", code: '=AVERAGE(E2:E1000)', desc: "Time taken" },
    { label: "Best Source", code: '=MAX(F2:F1000)', desc: "Top recruitment source" },
    { label: "Cost per Hire", code: '=SUM(G2:G1000)/D2', desc: "Hiring cost" },
    { label: "Status", code: '=IF(D2>10,"GOOD","LOW")', desc: "Recruitment status" }
  ]
},

{
  id: 4005,
  name: "TRAINING EFFECTIVENESS REPORT",
  icon: "🎓",
  category: "HR",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Employee training impact aur learning improvement tracking",
  formulas: [
    { label: "Total Training Sessions", code: '=COUNTA(A2:A1000)', desc: "Training count" },
    { label: "Attended Employees", code: '=COUNTIF(B2:B1000,"ATTENDED")', desc: "Participants" },
    { label: "Absent Employees", code: '=COUNTIF(B2:B1000,"ABSENT")', desc: "Missing training" },
    { label: "Average Score", code: '=AVERAGE(C2:C1000)', desc: "Training score" },
    { label: "High Performers", code: '=COUNTIF(C2:C1000,">80")', desc: "Good learners" },
    { label: "Low Performers", code: '=COUNTIF(C2:C1000,"<40")', desc: "Weak learners" },
    { label: "Improvement Rate", code: '=(C1000-C2)/C2*100', desc: "Growth after training" },
    { label: "Training Cost", code: '=SUM(D2:D1000)', desc: "Total expense" },
    { label: "ROI", code: '=(C2-D2)/D2*100', desc: "Training ROI" },
    { label: "Status", code: '=IF(C2>70,"EFFECTIVE","NEEDS IMPROVEMENT")', desc: "Training result" }
  ]
},
    //HR & EMPLOYEE ANALYTICS REPORTS👆
   // WEBSITE / APP ANALYTICS REPORTS 👇
    {
  id: 5001,
  name: "WEBSITE TRAFFIC REPORT",
  icon: "🌐",
  category: "Web Analytics",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Website visitors aur traffic sources track karne ke liye",
  formulas: [
    { label: "Total Visitors", code: '=COUNTA(A2:A1000)', desc: "All visitors" },
    { label: "Unique Visitors", code: '=SUM(B2:B1000)', desc: "Unique users" },
    { label: "New Visitors", code: '=COUNTIF(C2:C1000,"NEW")', desc: "First time users" },
    { label: "Returning Visitors", code: '=COUNTIF(C2:C1000,"RETURNING")', desc: "Repeat users" },
    { label: "Total Sessions", code: '=SUM(D2:D1000)', desc: "Sessions count" },
    { label: "Traffic Growth %", code: '=(B1000-B2)/B2*100', desc: "Growth rate" },
    { label: "Highest Traffic Day", code: '=MAX(B2:B1000)', desc: "Peak traffic" },
    { label: "Lowest Traffic Day", code: '=MIN(B2:B1000)', desc: "Low traffic" },
    { label: "Avg Visitors", code: '=AVERAGE(B2:B1000)', desc: "Average traffic" },
    { label: "Status", code: '=IF(B2>1000,"HIGH TRAFFIC","LOW")', desc: "Traffic status" }
  ]
},

{
  id: 5002,
  name: "PAGE VIEW REPORT",
  icon: "👁️",
  category: "Web Analytics",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Web pages ki views aur popularity track karna",
  formulas: [
    { label: "Total Page Views", code: '=SUM(A2:A1000)', desc: "All views" },
    { label: "Unique Page Views", code: '=COUNTA(B2:B1000)', desc: "Unique views" },
    { label: "Top Page Views", code: '=MAX(A2:A1000)', desc: "Most viewed page" },
    { label: "Lowest Page Views", code: '=MIN(A2:A1000)', desc: "Least viewed page" },
    { label: "Avg Views", code: '=AVERAGE(A2:A1000)', desc: "Average views" },
    { label: "Page Growth %", code: '=(A1000-A2)/A2*100', desc: "Growth rate" },
    { label: "Repeat Views", code: '=COUNTIF(C2:C1000,">1")', desc: "Revisits" },
    { label: "Bounce Views", code: '=COUNTIF(D2:D1000,"BOUNCE")', desc: "Exit pages" },
    { label: "Engagement Score", code: '=AVERAGE(E2:E1000)', desc: "Engagement" },
    { label: "Status", code: '=IF(A2>500,"POPULAR","LOW")', desc: "Page status" }
  ]
},

{
  id: 5003,
  name: "BOUNCE RATE REPORT",
  icon: "📉",
  category: "Web Analytics",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Users kitni der website par rukte hain analysis",
  formulas: [
    { label: "Total Sessions", code: '=COUNTA(A2:A1000)', desc: "All visits" },
    { label: "Bounce Sessions", code: '=COUNTIF(B2:B1000,"BOUNCE")', desc: "Single page visits" },
    { label: "Non Bounce", code: '=COUNTIF(B2:B1000,"ENGAGED")', desc: "Engaged users" },
    { label: "Bounce Rate %", code: '=B2/A2*100', desc: "Exit rate" },
    { label: "Avg Time", code: '=AVERAGE(C2:C1000)', desc: "Session time" },
    { label: "Max Time", code: '=MAX(C2:C1000)', desc: "Longest session" },
    { label: "Min Time", code: '=MIN(C2:C1000)', desc: "Shortest session" },
    { label: "High Bounce Pages", code: '=COUNTIF(D2:D1000,">70")', desc: "Bad pages" },
    { label: "Low Bounce Pages", code: '=COUNTIF(D2:D1000,"<30")', desc: "Good pages" },
    { label: "Status", code: '=IF(B2/A2>0.5,"BAD","GOOD")', desc: "Site health" }
  ]
},

{
  id: 5004,
  name: "APP USAGE REPORT",
  icon: "📱",
  category: "Web Analytics",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Mobile app usage aur behavior tracking",
  formulas: [
    { label: "Total Users", code: '=COUNTA(A2:A1000)', desc: "App users" },
    { label: "Active Users", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Daily users" },
    { label: "Inactive Users", code: '=COUNTIF(B2:B1000,"INACTIVE")', desc: "Inactive users" },
    { label: "Sessions", code: '=SUM(C2:C1000)', desc: "Total sessions" },
    { label: "Avg Session Time", code: '=AVERAGE(D2:D1000)', desc: "Usage time" },
    { label: "App Opens", code: '=SUM(E2:E1000)', desc: "App launches" },
    { label: "Crash Count", code: '=COUNTIF(F2:F1000,"CRASH")', desc: "App errors" },
    { label: "Retention Rate", code: '=B2/A2*100', desc: "User retention" },
    { label: "Growth %", code: '=(B1000-B2)/B2*100', desc: "User growth" },
    { label: "Status", code: '=IF(B2>500,"STRONG","WEAK")', desc: "App health" }
  ]
},

{
  id: 5005,
  name: "SESSION DURATION REPORT",
  icon: "⏱️",
  category: "Web Analytics",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "User kitni der website/app use karta hai tracking",
  formulas: [
    { label: "Total Sessions", code: '=COUNTA(A2:A1000)', desc: "All sessions" },
    { label: "Total Duration", code: '=SUM(B2:B1000)', desc: "Time spent" },
    { label: "Avg Duration", code: '=AVERAGE(B2:B1000)', desc: "Average time" },
    { label: "Max Duration", code: '=MAX(B2:B1000)', desc: "Longest session" },
    { label: "Min Duration", code: '=MIN(B2:B1000)', desc: "Shortest session" },
    { label: "High Engagement", code: '=COUNTIF(B2:B1000,">10")', desc: "Long sessions" },
    { label: "Low Engagement", code: '=COUNTIF(B2:B1000,"<2")', desc: "Short sessions" },
    { label: "Engagement Rate", code: '=B2/A2*100', desc: "Engagement %" },
    { label: "Growth Rate", code: '=(B1000-B2)/B2*100', desc: "Improvement" },
    { label: "Status", code: '=IF(AVERAGE(B2:B1000)>5,"GOOD","LOW")', desc: "Session health" }
  ]
},
// WEBSITE / APP ANALYTICS REPORTS👆
    // CYBER SECURITY REPORTS 👇
    {
  id: 6001,
  name: "THREAT DETECTION REPORT",
  icon: "🛡️",
  category: "Cyber Security",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "System threats aur malware detection tracking",
  formulas: [
    { label: "Total Scans", code: '=COUNTA(A2:A1000)', desc: "Security scans" },
    { label: "Threats Detected", code: '=COUNTIF(B2:B1000,"THREAT")', desc: "Detected threats" },
    { label: "Safe Records", code: '=COUNTIF(B2:B1000,"SAFE")', desc: "Clean data" },
    { label: "High Risk Threats", code: '=COUNTIF(C2:C1000,">80")', desc: "Danger level" },
    { label: "Medium Risk", code: '=COUNTIF(C2:C1000,"40-80")', desc: "Moderate threats" },
    { label: "Low Risk", code: '=COUNTIF(C2:C1000,"<40")', desc: "Minor issues" },
    { label: "Threat Rate %", code: '=B2/A2*100', desc: "Threat percentage" },
    { label: "Scan Efficiency", code: '=AVERAGE(D2:D1000)', desc: "Detection speed" },
    { label: "Max Threat Level", code: '=MAX(C2:C1000)', desc: "Highest risk" },
    { label: "Status", code: '=IF(B2>50,"DANGER","SAFE")', desc: "Security status" }
  ]
},

{
  id: 6002,
  name: "FIREWALL ACTIVITY REPORT",
  icon: "🔥",
  category: "Cyber Security",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Firewall incoming/outgoing traffic monitoring",
  formulas: [
    { label: "Total Requests", code: '=COUNTA(A2:A1000)', desc: "Network requests" },
    { label: "Allowed Requests", code: '=COUNTIF(B2:B1000,"ALLOW")', desc: "Permitted traffic" },
    { label: "Blocked Requests", code: '=COUNTIF(B2:B1000,"BLOCK")', desc: "Blocked traffic" },
    { label: "Suspicious Requests", code: '=COUNTIF(C2:C1000,"SUSPICIOUS")', desc: "Risk traffic" },
    { label: "Firewall Efficiency %", code: '=B2/A2*100', desc: "Security rate" },
    { label: "Attack Attempts", code: '=COUNTIF(D2:D1000,"ATTACK")', desc: "Hacking attempts" },
    { label: "Avg Response Time", code: '=AVERAGE(E2:E1000)', desc: "Firewall speed" },
    { label: "Max Load", code: '=MAX(F2:F1000)', desc: "Peak traffic" },
    { label: "Min Load", code: '=MIN(F2:F1000)', desc: "Low traffic" },
    { label: "Status", code: '=IF(C2>100,"UNDER ATTACK","SAFE")', desc: "Firewall status" }
  ]
},

{
  id: 6003,
  name: "LOGIN ATTACK REPORT",
  icon: "🔑",
  category: "Cyber Security",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Unauthorized login attempts aur brute force detection",
  formulas: [
    { label: "Total Logins", code: '=COUNTA(A2:A1000)', desc: "Login attempts" },
    { label: "Successful Logins", code: '=COUNTIF(B2:B1000,"SUCCESS")', desc: "Valid logins" },
    { label: "Failed Logins", code: '=COUNTIF(B2:B1000,"FAILED")', desc: "Wrong attempts" },
    { label: "Brute Force Attempts", code: '=COUNTIF(C2:C1000,"BRUTE")', desc: "Attack attempts" },
    { label: "Blocked IPs", code: '=COUNTIF(D2:D1000,"BLOCKED")', desc: "Security block" },
    { label: "Success Rate %", code: '=B2/A2*100', desc: "Login success" },
    { label: "Attack Rate %", code: '=C2/A2*100', desc: "Attack percentage" },
    { label: "Risk Users", code: '=COUNTIF(E2:E1000,">80")', desc: "High risk users" },
    { label: "Safe Users", code: '=COUNTIF(E2:E1000,"<40")', desc: "Safe users" },
    { label: "Status", code: '=IF(C2>10,"UNDER ATTACK","SAFE")', desc: "Login security" }
  ]
},

{
  id: 6004,
  name: "DATA BREACH REPORT",
  icon: "📛",
  category: "Cyber Security",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Data leak aur breach incidents tracking",
  formulas: [
    { label: "Total Records", code: '=COUNTA(A2:A1000)', desc: "All data logs" },
    { label: "Breached Records", code: '=COUNTIF(B2:B1000,"BREACH")', desc: "Leaked data" },
    { label: "Safe Records", code: '=COUNTIF(B2:B1000,"SAFE")', desc: "Secure data" },
    { label: "Critical Breaches", code: '=COUNTIF(C2:C1000,">80")', desc: "Severe leaks" },
    { label: "Minor Breaches", code: '=COUNTIF(C2:C1000,"<40")', desc: "Small leaks" },
    { label: "Breach Rate %", code: '=B2/A2*100', desc: "Leak percentage" },
    { label: "Data Loss", code: '=SUM(D2:D1000)', desc: "Total loss" },
    { label: "Recovery Rate", code: '=E2/A2*100', desc: "Recovered data" },
    { label: "Max Breach Level", code: '=MAX(C2:C1000)', desc: "Highest leak" },
    { label: "Status", code: '=IF(B2>0,"DANGER","SAFE")', desc: "Security status" }
  ]
},

{
  id: 6005,
  name: "SECURITY AUDIT REPORT",
  icon: "🧾",
  category: "Cyber Security",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Full system security audit aur compliance check",
  formulas: [
    { label: "Total Systems", code: '=COUNTA(A2:A1000)', desc: "All systems" },
    { label: "Compliant Systems", code: '=COUNTIF(B2:B1000,"COMPLIANT")', desc: "Safe systems" },
    { label: "Non-Compliant", code: '=COUNTIF(B2:B1000,"NON-COMPLIANT")', desc: "Risk systems" },
    { label: "Audit Score", code: '=AVERAGE(C2:C1000)', desc: "Security score" },
    { label: "High Risk Systems", code: '=COUNTIF(C2:C1000,">80")', desc: "Danger systems" },
    { label: "Low Risk Systems", code: '=COUNTIF(C2:C1000,"<40")', desc: "Safe systems" },
    { label: "Compliance Rate %", code: '=B2/A2*100', desc: "Compliance %" },
    { label: "Audit Failures", code: '=COUNTIF(D2:D1000,"FAIL")', desc: "Failed checks" },
    { label: "Audit Success", code: '=COUNTIF(D2:D1000,"PASS")', desc: "Passed checks" },
    { label: "Status", code: '=IF(B2/A2>0.9,"SECURE","RISK")', desc: "Audit status" }
  ]
},
    // CYBER SECURITY REPORTS👆
    // AI & MACHINE LEARNING REPORTS👇
    {
  id: 7001,
  name: "MODEL ACCURACY REPORT",
  icon: "🤖",
  category: "AI/ML",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "AI model ki accuracy aur performance measure karne ke liye",
  formulas: [
    { label: "Total Predictions", code: '=COUNTA(A2:A1000)', desc: "All predictions" },
    { label: "Correct Predictions", code: '=COUNTIF(B2:B1000,"CORRECT")', desc: "True results" },
    { label: "Wrong Predictions", code: '=COUNTIF(B2:B1000,"WRONG")', desc: "False results" },
    { label: "Accuracy %", code: '=B2/A2*100', desc: "Model accuracy" },
    { label: "Error Rate %", code: '=C2/A2*100', desc: "Model error" },
    { label: "Precision", code: '=D2/(D2+E2)', desc: "Precision score" },
    { label: "Recall", code: '=D2/(D2+F2)', desc: "Recall score" },
    { label: "F1 Score", code: '=2*(PRECISION*RECALL)/(PRECISION+RECALL)', desc: "F1 performance" },
    { label: "Max Accuracy", code: '=MAX(B2:B1000)', desc: "Best performance" },
    { label: "Status", code: '=IF(B2>90,"EXCELLENT","NEEDS IMPROVEMENT")', desc: "Model status" }
  ]
},

{
  id: 7002,
  name: "PREDICTION CONFIDENCE REPORT",
  icon: "📊",
  category: "AI/ML",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "AI predictions ki confidence level check karna",
  formulas: [
    { label: "Total Predictions", code: '=COUNTA(A2:A1000)', desc: "All outputs" },
    { label: "High Confidence", code: '=COUNTIF(B2:B1000,">80")', desc: "Strong predictions" },
    { label: "Medium Confidence", code: '=COUNTIF(B2:B1000,"40-80")', desc: "Moderate predictions" },
    { label: "Low Confidence", code: '=COUNTIF(B2:B1000,"<40")', desc: "Weak predictions" },
    { label: "Avg Confidence", code: '=AVERAGE(B2:B1000)', desc: "Mean confidence" },
    { label: "Max Confidence", code: '=MAX(B2:B1000)', desc: "Best prediction" },
    { label: "Min Confidence", code: '=MIN(B2:B1000)', desc: "Weak prediction" },
    { label: "Confidence Rate %", code: '=B2/A2*100', desc: "Overall confidence" },
    { label: "Uncertain Predictions", code: '=COUNTIF(C2:C1000,"UNCERTAIN")', desc: "Risk outputs" },
    { label: "Status", code: '=IF(B2>75,"RELIABLE","UNSTABLE")', desc: "AI confidence status" }
  ]
},

{
  id: 7003,
  name: "DATASET ANALYSIS REPORT",
  icon: "📂",
  category: "AI/ML",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Dataset quality aur structure analysis",
  formulas: [
    { label: "Total Records", code: '=COUNTA(A2:A1000)', desc: "Dataset size" },
    { label: "Valid Records", code: '=COUNTIF(B2:B1000,"VALID")', desc: "Clean data" },
    { label: "Missing Values", code: '=COUNTBLANK(A2:A1000)', desc: "Empty fields" },
    { label: "Duplicate Records", code: '=COUNTIF(C2:C1000,">1")', desc: "Repeated data" },
    { label: "Data Quality %", code: '=B2/A2*100', desc: "Quality score" },
    { label: "Noise Level", code: '=COUNTIF(D2:D1000,"NOISE")', desc: "Bad data" },
    { label: "Feature Count", code: '=COUNTA(E2:E1000)', desc: "Total features" },
    { label: "Max Value", code: '=MAX(F2:F1000)', desc: "Highest value" },
    { label: "Min Value", code: '=MIN(F2:F1000)', desc: "Lowest value" },
    { label: "Status", code: '=IF(B2>90,"CLEAN","DIRTY")', desc: "Dataset status" }
  ]
},

{
  id: 7004,
  name: "AI TRAINING REPORT",
  icon: "🧠",
  category: "AI/ML",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "AI model training progress aur cost tracking",
  formulas: [
    { label: "Total Epochs", code: '=COUNTA(A2:A1000)', desc: "Training cycles" },
    { label: "Completed Epochs", code: '=COUNTIF(B2:B1000,"DONE")', desc: "Finished training" },
    { label: "Loss Value", code: '=AVERAGE(C2:C1000)', desc: "Error rate" },
    { label: "Accuracy", code: '=AVERAGE(D2:D1000)', desc: "Training accuracy" },
    { label: "Training Time", code: '=SUM(E2:E1000)', desc: "Total time" },
    { label: "GPU Usage", code: '=AVERAGE(F2:F1000)', desc: "Resource usage" },
    { label: "Best Epoch", code: '=MAX(D2:D1000)', desc: "Best result" },
    { label: "Worst Epoch", code: '=MIN(D2:D1000)', desc: "Weak result" },
    { label: "Improvement %", code: '=(D1000-D2)/D2*100', desc: "Learning growth" },
    { label: "Status", code: '=IF(D2>85,"TRAINED WELL","NEEDS TRAINING")', desc: "Model status" }
  ]
},

{
  id: 7005,
  name: "FEATURE IMPORTANCE REPORT",
  icon: "📊",
  category: "AI/ML",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "AI model me kaunsa feature sabse important hai analysis",
  formulas: [
    { label: "Total Features", code: '=COUNTA(A2:A1000)', desc: "All features" },
    { label: "Important Features", code: '=COUNTIF(B2:B1000,">80")', desc: "High importance" },
    { label: "Medium Features", code: '=COUNTIF(B2:B1000,"40-80")', desc: "Medium impact" },
    { label: "Low Features", code: '=COUNTIF(B2:B1000,"<40")', desc: "Low impact" },
    { label: "Max Importance", code: '=MAX(B2:B1000)', desc: "Top feature" },
    { label: "Min Importance", code: '=MIN(B2:B1000)', desc: "Weak feature" },
    { label: "Avg Importance", code: '=AVERAGE(B2:B1000)', desc: "Average impact" },
    { label: "Feature Score", code: '=SUM(B2:B1000)', desc: "Total score" },
    { label: "Impact Rate %", code: '=B2/A2*100', desc: "Importance ratio" },
    { label: "Status", code: '=IF(B2>70,"IMPORTANT","IGNORE")', desc: "Feature status" }
  ]
},
    // AI & MACHINE LEARNING REPORTS👆
    // TAX & COMPLIANCE REPORTS 👇
    {
  id: 8001,
  name: "INCOME TAX REPORT",
  icon: "🧾",
  category: "Tax & Compliance",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Total income aur tax calculation tracking ke liye",
  formulas: [
    { label: "Total Income", code: '=SUM(A2:A1000)', desc: "All income" },
    { label: "Taxable Income", code: '=SUM(B2:B1000)', desc: "Tax base" },
    { label: "Tax Paid", code: '=SUM(C2:C1000)', desc: "Paid tax" },
    { label: "Pending Tax", code: '=B2-C2', desc: "Due tax" },
    { label: "Tax Rate %", code: '=C2/B2*100', desc: "Tax percentage" },
    { label: "Max Income", code: '=MAX(A2:A1000)', desc: "Highest income" },
    { label: "Min Income", code: '=MIN(A2:A1000)', desc: "Lowest income" },
    { label: "Avg Income", code: '=AVERAGE(A2:A1000)', desc: "Average income" },
    { label: "Refund Status", code: '=IF(C2>B2,"REFUND","DUE")', desc: "Tax status" },
    { label: "Final Status", code: '=IF(C2>=B2,"PAID","PENDING")', desc: "Payment status" }
  ]
},

{
  id: 8002,
  name: "GST FILING REPORT",
  icon: "💰",
  category: "Tax & Compliance",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "GST collection aur filing status tracking",
  formulas: [
    { label: "Total Sales", code: '=SUM(A2:A1000)', desc: "Business sales" },
    { label: "GST Collected", code: '=SUM(B2:B1000)', desc: "GST amount" },
    { label: "GST Paid", code: '=SUM(C2:C1000)', desc: "Paid GST" },
    { label: "Pending GST", code: '=B2-C2', desc: "Due GST" },
    { label: "GST Rate %", code: '=C2/A2*100', desc: "GST percentage" },
    { label: "Max GST", code: '=MAX(B2:B1000)', desc: "Highest GST" },
    { label: "Min GST", code: '=MIN(B2:B1000)', desc: "Lowest GST" },
    { label: "Avg GST", code: '=AVERAGE(B2:B1000)', desc: "Average GST" },
    { label: "Filing Status", code: '=IF(C2>=B2,"FILED","PENDING")', desc: "GST status" },
    { label: "Compliance", code: '=IF(C2>=B2,"OK","RISK")', desc: "Compliance status" }
  ]
},

{
  id: 8003,
  name: "AUDIT REPORT",
  icon: "📋",
  category: "Tax & Compliance",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Financial audit aur verification tracking",
  formulas: [
    { label: "Total Transactions", code: '=COUNTA(A2:A1000)', desc: "All entries" },
    { label: "Verified Records", code: '=COUNTIF(B2:B1000,"VERIFIED")', desc: "Checked data" },
    { label: "Unverified Records", code: '=COUNTIF(B2:B1000,"UNVERIFIED")', desc: "Pending check" },
    { label: "Audit Score", code: '=AVERAGE(C2:C1000)', desc: "Audit rating" },
    { label: "Max Score", code: '=MAX(C2:C1000)', desc: "Best audit" },
    { label: "Min Score", code: '=MIN(C2:C1000)', desc: "Worst audit" },
    { label: "Error Count", code: '=COUNTIF(D2:D1000,"ERROR")', desc: "Audit errors" },
    { label: "Pass Rate %", code: '=B2/A2*100', desc: "Success rate" },
    { label: "Fail Rate %", code: '=C2/A2*100', desc: "Failure rate" },
    { label: "Status", code: '=IF(B2/A2>0.9,"PASS","FAIL")', desc: "Audit result" }
  ]
},

{
  id: 8004,
  name: "COMPLIANCE STATUS REPORT",
  icon: "✅",
  category: "Tax & Compliance",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Rules aur regulations compliance tracking",
  formulas: [
    { label: "Total Rules", code: '=COUNTA(A2:A1000)', desc: "All rules" },
    { label: "Compliant", code: '=COUNTIF(B2:B1000,"YES")', desc: "Following rules" },
    { label: "Non-Compliant", code: '=COUNTIF(B2:B1000,"NO")', desc: "Violations" },
    { label: "Partial Compliance", code: '=COUNTIF(B2:B1000,"PARTIAL")', desc: "Partial cases" },
    { label: "Compliance %", code: '=B2/A2*100', desc: "Compliance rate" },
    { label: "Violation Rate", code: '=C2/A2*100', desc: "Violation rate" },
    { label: "Risk Score", code: '=AVERAGE(C2:C1000)', desc: "Risk level" },
    { label: "Max Risk", code: '=MAX(C2:C1000)', desc: "Highest risk" },
    { label: "Min Risk", code: '=MIN(C2:C1000)', desc: "Lowest risk" },
    { label: "Status", code: '=IF(B2/A2>0.95,"SAFE","RISK")', desc: "Compliance status" }
  ]
},

{
  id: 8005,
  name: "LEGAL SUMMARY REPORT",
  icon: "⚖️",
  category: "Tax & Compliance",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Legal cases aur compliance summary tracking",
  formulas: [
    { label: "Total Cases", code: '=COUNTA(A2:A1000)', desc: "All legal cases" },
    { label: "Open Cases", code: '=COUNTIF(B2:B1000,"OPEN")', desc: "Pending cases" },
    { label: "Closed Cases", code: '=COUNTIF(B2:B1000,"CLOSED")', desc: "Resolved cases" },
    { label: "Win Cases", code: '=COUNTIF(C2:C1000,"WON")', desc: "Successful cases" },
    { label: "Loss Cases", code: '=COUNTIF(C2:C1000,"LOST")', desc: "Failed cases" },
    { label: "Win Rate %", code: '=D2/A2*100', desc: "Success rate" },
    { label: "Avg Case Time", code: '=AVERAGE(D2:D1000)', desc: "Resolution time" },
    { label: "Max Case Cost", code: '=MAX(E2:E1000)', desc: "Highest cost" },
    { label: "Min Case Cost", code: '=MIN(E2:E1000)', desc: "Lowest cost" },
    { label: "Status", code: '=IF(D2>50,"GOOD","RISK")', desc: "Legal status" }
  ]
},
    // TAX & COMPLIANCE REPORTS👆
    // LOGISTICS & SUPPLY CHAIN REPORTS👇
    {
  id: 9001,
  name: "SHIPMENT TRACKING REPORT",
  icon: "📦",
  category: "Logistics",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Shipments ka real-time tracking aur status monitoring",
  formulas: [
    { label: "Total Shipments", code: '=COUNTA(A2:A1000)', desc: "All shipments" },
    { label: "Delivered Shipments", code: '=COUNTIF(B2:B1000,"DELIVERED")', desc: "Completed delivery" },
    { label: "In Transit", code: '=COUNTIF(B2:B1000,"TRANSIT")', desc: "On the way" },
    { label: "Pending Shipments", code: '=COUNTIF(B2:B1000,"PENDING")', desc: "Not shipped yet" },
    { label: "Delayed Shipments", code: '=COUNTIF(B2:B1000,"DELAYED")', desc: "Late delivery" },
    { label: "Delivery Rate %", code: '=B2/A2*100', desc: "Success rate" },
    { label: "Avg Delivery Time", code: '=AVERAGE(C2:C1000)', desc: "Delivery speed" },
    { label: "Max Delivery Time", code: '=MAX(C2:C1000)', desc: "Slowest delivery" },
    { label: "Min Delivery Time", code: '=MIN(C2:C1000)', desc: "Fastest delivery" },
    { label: "Status", code: '=IF(B2/A2>0.9,"GOOD","NEEDS IMPROVEMENT")', desc: "Shipment health" }
  ]
},

{
  id: 9002,
  name: "DELIVERY PERFORMANCE REPORT",
  icon: "🚚",
  category: "Logistics",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Delivery agents aur performance tracking",
  formulas: [
    { label: "Total Deliveries", code: '=COUNTA(A2:A1000)', desc: "All deliveries" },
    { label: "Successful Deliveries", code: '=COUNTIF(B2:B1000,"SUCCESS")', desc: "Completed" },
    { label: "Failed Deliveries", code: '=COUNTIF(B2:B1000,"FAILED")', desc: "Unsuccessful" },
    { label: "On-Time Deliveries", code: '=COUNTIF(C2:C1000,"ONTIME")', desc: "Timely delivery" },
    { label: "Late Deliveries", code: '=COUNTIF(C2:C1000,"LATE")', desc: "Delayed" },
    { label: "Success Rate %", code: '=B2/A2*100', desc: "Performance rate" },
    { label: "Avg Delivery Score", code: '=AVERAGE(D2:D1000)', desc: "Rating score" },
    { label: "Max Score", code: '=MAX(D2:D1000)', desc: "Best performer" },
    { label: "Min Score", code: '=MIN(D2:D1000)', desc: "Weak performer" },
    { label: "Status", code: '=IF(B2/A2>0.85,"EXCELLENT","LOW")', desc: "Performance status" }
  ]
},

{
  id: 9003,
  name: "WAREHOUSE EFFICIENCY REPORT",
  icon: "🏬",
  category: "Logistics",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Warehouse storage aur operations efficiency tracking",
  formulas: [
    { label: "Total Stock Items", code: '=COUNTA(A2:A1000)', desc: "Inventory items" },
    { label: "Stored Items", code: '=COUNTIF(B2:B1000,"STORED")', desc: "Available stock" },
    { label: "Out of Stock", code: '=COUNTIF(B2:B1000,"OUT")', desc: "Missing items" },
    { label: "Damaged Items", code: '=COUNTIF(C2:C1000,"DAMAGED")', desc: "Broken goods" },
    { label: "Utilization %", code: '=B2/A2*100', desc: "Space usage" },
    { label: "Efficiency Score", code: '=AVERAGE(D2:D1000)', desc: "Performance" },
    { label: "Max Capacity Used", code: '=MAX(E2:E1000)', desc: "Peak usage" },
    { label: "Min Capacity Used", code: '=MIN(E2:E1000)', desc: "Low usage" },
    { label: "Stock Accuracy", code: '=COUNTIF(F2:F1000,"ACCURATE")', desc: "Correct stock" },
    { label: "Status", code: '=IF(B2/A2>0.9,"OPTIMAL","IMPROVE")', desc: "Warehouse status" }
  ]
},

{
  id: 9004,
  name: "SUPPLY DELAY REPORT",
  icon: "⏳",
  category: "Logistics",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Supply chain delays aur bottlenecks tracking",
  formulas: [
    { label: "Total Orders", code: '=COUNTA(A2:A1000)', desc: "All supplies" },
    { label: "On Time Supply", code: '=COUNTIF(B2:B1000,"ONTIME")', desc: "Timely supply" },
    { label: "Delayed Supply", code: '=COUNTIF(B2:B1000,"DELAYED")', desc: "Late supply" },
    { label: "Critical Delays", code: '=COUNTIF(C2:C1000,">3")', desc: "Severe delay" },
    { label: "Avg Delay Time", code: '=AVERAGE(C2:C1000)', desc: "Delay average" },
    { label: "Max Delay", code: '=MAX(C2:C1000)', desc: "Worst delay" },
    { label: "Min Delay", code: '=MIN(C2:C1000)', desc: "Best case" },
    { label: "Delay Rate %", code: '=B2/A2*100', desc: "Delay percentage" },
    { label: "Supply Efficiency", code: '=C2/B2*100', desc: "Efficiency rate" },
    { label: "Status", code: '=IF(B2/A2>0.9,"GOOD","RISK")', desc: "Supply health" }
  ]
},

{
  id: 9005,
  name: "VENDOR PERFORMANCE REPORT",
  icon: "🏭",
  category: "Logistics",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Suppliers aur vendors ki performance evaluation",
  formulas: [
    { label: "Total Vendors", code: '=COUNTA(A2:A1000)', desc: "All vendors" },
    { label: "Active Vendors", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Working vendors" },
    { label: "Inactive Vendors", code: '=COUNTIF(B2:B1000,"INACTIVE")', desc: "Stopped vendors" },
    { label: "On-Time Delivery", code: '=COUNTIF(C2:C1000,"ONTIME")', desc: "Timely supply" },
    { label: "Delayed Delivery", code: '=COUNTIF(C2:C1000,"DELAY")', desc: "Late supply" },
    { label: "Vendor Score", code: '=AVERAGE(D2:D1000)', desc: "Performance score" },
    { label: "Max Score", code: '=MAX(D2:D1000)', desc: "Best vendor" },
    { label: "Min Score", code: '=MIN(D2:D1000)', desc: "Weak vendor" },
    { label: "Cost Efficiency", code: '=SUM(E2:E1000)/A2', desc: "Cost ratio" },
    { label: "Status", code: '=IF(D2>80,"RELIABLE","RISK")', desc: "Vendor status" }
  ]
},
    // LOGISTICS & SUPPLY CHAIN REPORTS👆
    // SOCIAL MEDIA REPORTS👇 
    {
  id: 10001,
  name: "FOLLOWERS GROWTH REPORT",
  icon: "📈",
  category: "Social Media",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Followers ka growth aur audience increase track karna",
  formulas: [
    { label: "Total Followers", code: '=COUNTA(A2:A1000)', desc: "All followers" },
    { label: "New Followers", code: '=COUNTIF(B2:B1000,"NEW")', desc: "Recent followers" },
    { label: "Lost Followers", code: '=COUNTIF(B2:B1000,"UNFOLLOW")', desc: "Unfollowers" },
    { label: "Net Growth", code: '=B2-C2', desc: "Growth difference" },
    { label: "Growth Rate %", code: '=B2/A2*100', desc: "Growth percentage" },
    { label: "Max Growth Day", code: '=MAX(D2:D1000)', desc: "Best day" },
    { label: "Min Growth Day", code: '=MIN(D2:D1000)', desc: "Worst day" },
    { label: "Avg Growth", code: '=AVERAGE(D2:D1000)', desc: "Average increase" },
    { label: "Growth Trend", code: '=(D1000-D2)/D2*100', desc: "Trend analysis" },
    { label: "Status", code: '=IF(B2>1000,"STRONG","WEAK")', desc: "Growth status" }
  ]
},

{
  id: 10002,
  name: "ENGAGEMENT REPORT",
  icon: "👍",
  category: "Social Media",
  color: "#00897b",
  colorRgb: "rgba(0,137,123,0.25)",
  use: "Likes, comments aur engagement analysis",
  formulas: [
    { label: "Total Posts", code: '=COUNTA(A2:A1000)', desc: "All posts" },
    { label: "Total Likes", code: '=SUM(B2:B1000)', desc: "Likes count" },
    { label: "Total Comments", code: '=SUM(C2:C1000)', desc: "Comments count" },
    { label: "Total Shares", code: '=SUM(D2:D1000)', desc: "Shares count" },
    { label: "Engagement Rate %", code: '=(B2+C2+D2)/A2*100', desc: "Engagement percentage" },
    { label: "Avg Engagement", code: '=AVERAGE(B2:B1000)', desc: "Average engagement" },
    { label: "Max Engagement Post", code: '=MAX(B2:B1000)', desc: "Best post" },
    { label: "Min Engagement Post", code: '=MIN(B2:B1000)', desc: "Weak post" },
    { label: "Viral Score", code: '=SUM(D2:D1000)', desc: "Virality score" },
    { label: "Status", code: '=IF(B2>5000,"HIGH ENGAGEMENT","LOW")', desc: "Engagement status" }
  ]
},

{
  id: 10003,
  name: "VIRAL CONTENT REPORT",
  icon: "🔥",
  category: "Social Media",
  color: "#e53935",
  colorRgb: "rgba(229,57,53,0.25)",
  use: "Viral posts aur trending content analysis",
  formulas: [
    { label: "Total Content", code: '=COUNTA(A2:A1000)', desc: "All posts" },
    { label: "Viral Posts", code: '=COUNTIF(B2:B1000,"VIRAL")', desc: "Trending posts" },
    { label: "Normal Posts", code: '=COUNTIF(B2:B1000,"NORMAL")', desc: "Regular posts" },
    { label: "High Reach", code: '=COUNTIF(C2:C1000,">10000")', desc: "High reach posts" },
    { label: "Avg Reach", code: '=AVERAGE(C2:C1000)', desc: "Average reach" },
    { label: "Max Reach", code: '=MAX(C2:C1000)', desc: "Top viral post" },
    { label: "Min Reach", code: '=MIN(C2:C1000)', desc: "Lowest reach" },
    { label: "Virality Rate %", code: '=B2/A2*100', desc: "Viral percentage" },
    { label: "Share Rate", code: '=D2/A2*100', desc: "Sharing rate" },
    { label: "Status", code: '=IF(B2>10,"TRENDING","NORMAL")', desc: "Content status" }
  ]
},

{
  id: 10004,
  name: "POST PERFORMANCE REPORT",
  icon: "📊",
  category: "Social Media",
  color: "#6d4c41",
  colorRgb: "rgba(109,76,65,0.25)",
  use: "Har post ka performance analyze karna",
  formulas: [
    { label: "Total Posts", code: '=COUNTA(A2:A1000)', desc: "All posts" },
    { label: "High Performance Posts", code: '=COUNTIF(B2:B1000,">80")', desc: "Best posts" },
    { label: "Low Performance Posts", code: '=COUNTIF(B2:B1000,"<40")', desc: "Weak posts" },
    { label: "Avg Performance", code: '=AVERAGE(B2:B1000)', desc: "Average score" },
    { label: "Max Score", code: '=MAX(B2:B1000)', desc: "Top post" },
    { label: "Min Score", code: '=MIN(B2:B1000)', desc: "Worst post" },
    { label: "Engagement Score", code: '=SUM(C2:C1000)', desc: "Engagement total" },
    { label: "Reach Score", code: '=SUM(D2:D1000)', desc: "Total reach" },
    { label: "CTR %", code: '=C2/D2*100', desc: "Click rate" },
    { label: "Status", code: '=IF(B2>70,"GOOD","NEEDS IMPROVEMENT")', desc: "Performance status" }
  ]
},

{
  id: 10005,
  name: "AUDIENCE INSIGHT REPORT",
  icon: "👥",
  category: "Social Media",
  color: "#3949ab",
  colorRgb: "rgba(57,73,171,0.25)",
  use: "Audience behavior aur interest analysis",
  formulas: [
    { label: "Total Audience", code: '=COUNTA(A2:A1000)', desc: "All users" },
    { label: "Active Users", code: '=COUNTIF(B2:B1000,"ACTIVE")', desc: "Engaged users" },
    { label: "Inactive Users", code: '=COUNTIF(B2:B1000,"INACTIVE")', desc: "Inactive users" },
    { label: "Age Group Avg", code: '=AVERAGE(C2:C1000)', desc: "Age analysis" },
    { label: "Male Users", code: '=COUNTIF(D2:D1000,"MALE")', desc: "Male audience" },
    { label: "Female Users", code: '=COUNTIF(D2:D1000,"FEMALE")', desc: "Female audience" },
    { label: "Engagement Level", code: '=AVERAGE(E2:E1000)', desc: "User activity" },
    { label: "Top Interest", code: '=MAX(F2:F1000)', desc: "Popular interest" },
    { label: "Growth Rate %", code: '=(B2/A2)*100', desc: "Audience growth" },
    { label: "Status", code: '=IF(B2>5000,"STRONG AUDIENCE","WEAK")', desc: "Audience status" }
  ]
},
    // SOCIAL MEDIA REPORTS 👆
];

// RENDER CARDS
function renderCards(data) {

  const grid = document.getElementById('reportGrid');
  const noRes = document.getElementById('noResults');

  grid.innerHTML = '';

  if (!data || data.length === 0) {
    noRes.classList.add('visible');
    return;
  }

  noRes.classList.remove('visible');

  data.forEach((r, i) => {

    const card = document.createElement('div');

    card.className = 'card';

    card.style.cssText = `
      --accent: ${r.color || '#00c8ff'};
      --accent-color: ${r.color || '#00c8ff'};
      --accent-rgb: ${r.colorRgb || 'rgba(0,200,255,0.25)'};
      animation-delay: ${i * 0.08}s;
    `;

    card.innerHTML = `

      <div class="card-icon"
      style="border-color:${r.color}; box-shadow:0 0 20px ${r.colorRgb};">
        ${r.icon || '📊'}
      </div>

      <div class="card-name">
        ${r.name || 'No Name'}
      </div>

      <div class="card-category"
      style="color:${r.color}">
        ${r.category || 'General'}
      </div>

      <div class="card-desc">
        ${(r.use || '').slice(0,80)}...
      </div>

      <div class="formula-pills">

        ${(r.tags || []).map(t => `
          <span class="formula-pill">${t}</span>
        `).join('')}

      </div>

      <button class="view-btn"
      style="border-color:${r.color}; color:${r.color};"
      onclick="openModal(${r.id})">

        🔘 View Formulas

      </button>
    `;

    // RIPPLE EFFECT
    const btn = card.querySelector('.view-btn');

    btn.addEventListener('click', function(e) {

      const rect = this.getBoundingClientRect();

      const ripple = document.createElement('span');

      ripple.className = 'ripple';

      const size = Math.max(rect.width, rect.height);

      ripple.style.cssText = `
        width:${size}px;
        height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
      `;

      this.appendChild(ripple);

      setTimeout(() => ripple.remove(), 600);

    });

    grid.appendChild(card);

  });

}



// OPEN MODAL
function openModal(id) {

  const r = reports.find(x => x.id === id);

  console.log(r);

  if (!r) {
    alert("Report not found!");
    return;
  }

  if (!r.formulas || !Array.isArray(r.formulas)) {
    alert("Formulas not found!");
    return;
  }

  document.getElementById('modalIcon').textContent = r.icon || '📊';

  document.getElementById('modalTitle').textContent = r.name || 'No Name';

  document.getElementById('modalTitle').style.color = r.color || '#00c8ff';

  document.getElementById('modalSubtitle').textContent =
    r.category || 'General';

  document.getElementById('modalSubtitle').style.color =
    r.color || '#00c8ff';

  document.getElementById('modalUse').innerHTML =
    `<span>📌 Use:</span> ${r.use || 'No description available'}`;

  const body = document.getElementById('modalBody');

  body.innerHTML = `

    <div class="formula-section-title">
      📊 All Formulas
    </div>

    ${(r.formulas || []).map((f) => `

      <div class="formula-item">

        <div class="formula-label">

          <span class="arrow">➤</span>

          ${f.label || 'No Label'}

          <small
          style="
          color:#777;
          font-weight:400;
          margin-left:auto;
          font-size:0.75rem;
          ">
            ${f.desc || ''}
          </small>

        </div>

        <div class="formula-code-row">

          <div class="formula-code">
            ${f.code || ''}
          </div>

          <button
          class="copy-btn"
          onclick="copyFormula(this, \`${f.code || ''}\`)">

            📋 Copy

          </button>

        </div>

      </div>

    `).join('')}

    <div class="modal-tutorial">

      <a
      class="tutorial-btn"
      href="https://www.youtube.com/results?search_query=${encodeURIComponent((r.name || '') + ' excel formula tutorial')}"
      target="_blank">

        ▶ Watch Tutorial on YouTube

      </a>

    </div>

  `;

  document.getElementById('modalOverlay')
    .classList.add('active');

  document.body.style.overflow = 'hidden';

}



// CLOSE MODAL
document.getElementById('modalClose').onclick = closeModal;

document.getElementById('modalOverlay').onclick = function(e) {
  if (e.target === this) closeModal();
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

function closeModal() {

  document.getElementById('modalOverlay')
    .classList.remove('active');

  document.body.style.overflow = '';

}



// COPY FORMULA
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
document.getElementById('searchInput')
.addEventListener('input', function() {

  const q = this.value.toLowerCase().trim();

  if (!q) {
    renderCards(reports);
    return;
  }

  const filtered = reports.filter(r =>

    (r.name || '').toLowerCase().includes(q) ||

    (r.category || '').toLowerCase().includes(q) ||

    (r.use || '').toLowerCase().includes(q) ||

    (r.tags || []).some(t =>
      t.toLowerCase().includes(q)
    ) ||

    (r.formulas || []).some(f =>

      (f.code || '').toLowerCase().includes(q) ||

      (f.label || '').toLowerCase().includes(q)

    )

  );

  renderCards(filtered);

});



// TOTAL COUNTS
document.getElementById('totalReports').innerText =
  reports.length;

let totalFormulaCount = 0;

reports.forEach(report => {

  totalFormulaCount +=
    (report.formulas || []).length;

});

document.getElementById('totalFormulas').innerText =
  totalFormulaCount;



// INIT
renderCards(reports);

//next code hai ma 👇✔️


// DARK / LIGHT MODE

const themeToggle =
document.getElementById('themeToggle');


// LOAD SAVED THEME

if(localStorage.getItem('theme') === 'light'){

  document.body.classList.add('light-mode');

  themeToggle.innerHTML = '☀️ Light Mode';

}


// TOGGLE

themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

  // SAVE THEME

  if(document.body.classList.contains('light-mode')){

    localStorage.setItem('theme','light');

    themeToggle.innerHTML = '☀️ Light Mode';

  }

  else{

    localStorage.setItem('theme','dark');

    themeToggle.innerHTML = '🌙 Dark Mode';

  }

});