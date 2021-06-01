import { Button } from 'src/components/button';
import ProgressBar from '@ramonak/react-progress-bar';
import ReactApexChart from 'react-apexcharts';
import AccountOneIcon from '../../assets/img/account1.png';
import AccountTwoIcon from '../../assets/img/account2.png';
import BankIcon from '../../assets/img/bank.png';
import InternetIcon from '../../assets/img/interne.png';
import TransferIcon from '../../assets/img/transfer.png';
import MarketingIcon from '../../assets/img/marketing.png';
import UnknownTransferIcon from '../../assets/img/unknown.png';
import FeeIcon from '../../assets/img/fee.png';

import {
    DashboardContainer,
    DashboardHeader,
    DashboardHeadingOne,
    DashboardHeadingTwo,
    DashboardBody,
    AccountInfoCard,
    AccountType,
    AccountName,
    AccountIconContainer,
    AccountIcon,
    AccountInfoCards,
    AccountBalance,
    AccountInfoTop,
    CashOutFlowContainer,
    AccountStats,
    AccountStatsTitle,
    CashFlowOptions,
    CashFlowOption,
    CashFlowOptionName,
    CashFlowIconContainer,
    CashFlowOptionLeft,
    TransactionsContainer,
    TransactionsContainerHeader,
    TransactionsContainerBody,
    UserName,
    TransactionDuration,
    TransactionAmount,
    TransactionStyle,
    TransactionLeftStyle,
    TransactionStyleIcon,
    TransactionHeaderText,
    ProgressContainer,
    MoneyFlowContainer,
    MoneyFlowSection,
    MoneyFlowAmount,
    MoneyFlowText,
    ChartContainer,
    DashboardHeadingContainer,
} from './dashboard.style';

const transactionDetails = [
    {
        name: 'Transfer Fee',
        duration: '12:49 AM',
        amount: '-N145.90',
        icon: FeeIcon,
    },
    {
        name: 'Adam Chapman',
        duration: '12:00 AM',
        amount: '-N2000.00',
        icon: UnknownTransferIcon,
    },
    {
        name: 'Shirley Barnes',
        duration: '12:00 AM',
        amount: '-N2000.00',
        icon: UnknownTransferIcon,
    },
    {
        name: 'Shirley Barnes',
        duration: '11:00 AM',
        amount: '-N2000.00',
        icon: UnknownTransferIcon,
    },
];

const cashoutFlowData = [
    {
        name: 'Bank Fees',
        amount: '- N 250,000',
        icon: BankIcon,
        color: 'pink',
        completed: 80,
    },
    {
        name: 'Internet',
        amount: '- N 250,000',
        icon: InternetIcon,
        color: 'lilac',
        completed: 70,
    },
    {
        name: 'Marketing',
        amount: '- N 250,000',
        icon: MarketingIcon,
        color: 'purple',
        completed: 40,
    },
    {
        name: 'Transfer',
        amount: '- N 250,000',
        icon: TransferIcon,
        color: 'green',
        completed: 20,
    },
];

const options = {
    chart: {
        id: 'area',
        toolbar: {
            show: false,
        },
        brush: {
            enabled: true,
            target: 'area',
        },
    },
    xaxis: {
        categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
    },
    colors: ['#FA4A84'],
};

const series = [
    {
        name: 'series-1',
        data: [4, 8, 11, 12, 11, 8, 6, 9],
    },
];

const Dashboard = () => {
    return (
        <DashboardContainer>
            <DashboardHeader>
                <DashboardHeadingContainer>
                    <DashboardHeadingOne>Welcome back, Kathy </DashboardHeadingOne>
                    <DashboardHeadingTwo>
                        Here&apos;s what has been happening in the last <span>7days</span>
                    </DashboardHeadingTwo>
                </DashboardHeadingContainer>
                <Button className="bold" type="button">
                    Add a sub account
                </Button>
            </DashboardHeader>

            <DashboardBody>
                <AccountInfoCards>
                    <AccountInfoCard>
                        <AccountInfoTop>
                            <div>
                                <AccountType>Current Account</AccountType>
                                <AccountName>
                                    Providus bank - <span>9906533917</span>
                                </AccountName>
                            </div>
                            <AccountIconContainer>
                                <AccountIcon src={AccountOneIcon} />
                            </AccountIconContainer>
                        </AccountInfoTop>
                        <AccountBalance>
                            N821,800.<span>45</span>
                        </AccountBalance>
                    </AccountInfoCard>
                    <AccountInfoCard>
                        <AccountInfoTop>
                            <div>
                                <AccountType>Savings Account</AccountType>
                                <AccountName>
                                    Sub Account - <span>12346789</span>
                                </AccountName>
                            </div>
                            <AccountIconContainer>
                                <AccountIcon src={AccountTwoIcon} />
                            </AccountIconContainer>
                        </AccountInfoTop>
                        <AccountBalance>
                            N39,342.<span>45</span>
                        </AccountBalance>
                    </AccountInfoCard>
                </AccountInfoCards>

                <AccountStats>
                    <CashOutFlowContainer>
                        <AccountStatsTitle>June summary</AccountStatsTitle>
                        <MoneyFlowContainer>
                            <MoneyFlowSection>
                                <MoneyFlowText>Money In</MoneyFlowText>
                                <MoneyFlowAmount>N 5,650,000</MoneyFlowAmount>
                            </MoneyFlowSection>
                            <MoneyFlowSection>
                                <MoneyFlowText>Money out</MoneyFlowText>
                                <MoneyFlowAmount>N 5,650,000</MoneyFlowAmount>
                            </MoneyFlowSection>
                            <MoneyFlowSection>
                                <MoneyFlowText>Difference</MoneyFlowText>
                                <MoneyFlowAmount>N 5,650,000</MoneyFlowAmount>
                            </MoneyFlowSection>
                        </MoneyFlowContainer>
                        <ChartContainer>
                            <ReactApexChart
                                options={options}
                                series={series}
                                type="area"
                                width="100%"
                                height="210px"
                            />
                        </ChartContainer>
                    </CashOutFlowContainer>

                    <CashOutFlowContainer>
                        <AccountStatsTitle>Cash outflow</AccountStatsTitle>

                        {cashoutFlowData.map((data) => (
                            <CashFlowOptions>
                                <CashFlowOption>
                                    <CashFlowOptionLeft>
                                        <CashFlowIconContainer className={data.color}>
                                            <img src={data.icon} alt="icon" />
                                        </CashFlowIconContainer>
                                        <CashFlowOptionName>{data.name}</CashFlowOptionName>
                                    </CashFlowOptionLeft>
                                    <ProgressContainer>
                                        <span>{data.amount}</span>
                                        <ProgressBar
                                            height="5px"
                                            bgColor="#FFCF56"
                                            completed={+data.completed}
                                            width="100%"
                                            baseBgColor="#EEEFF7"
                                            isLabelVisible={false}
                                            transitionTimingFunction="ease-in-out"
                                            transitionDuration="2s"
                                        />
                                    </ProgressContainer>
                                </CashFlowOption>
                            </CashFlowOptions>
                        ))}
                    </CashOutFlowContainer>
                </AccountStats>

                <TransactionsContainer>
                    <TransactionsContainerHeader>
                        <TransactionHeaderText>Recent transactions</TransactionHeaderText>
                        <button type="button">See all</button>
                    </TransactionsContainerHeader>
                    <TransactionsContainerBody>
                        {transactionDetails.map((transaction) => (
                            <TransactionStyle>
                                <TransactionLeftStyle>
                                    <TransactionStyleIcon>
                                        <img src={transaction.icon} alt="icon" />
                                    </TransactionStyleIcon>
                                    <div>
                                        <UserName>{transaction.name}</UserName>
                                        <TransactionDuration>
                                            {transaction.duration}
                                        </TransactionDuration>
                                    </div>
                                </TransactionLeftStyle>
                                <TransactionAmount>{transaction.amount}</TransactionAmount>
                            </TransactionStyle>
                        ))}
                    </TransactionsContainerBody>
                </TransactionsContainer>
            </DashboardBody>
        </DashboardContainer>
    );
};

export { Dashboard };
